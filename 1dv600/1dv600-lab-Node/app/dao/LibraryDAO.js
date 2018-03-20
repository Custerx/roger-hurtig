(function () {
    "use strict";

    var fs = require('fs');

    // Instructions how to use the xml2js
    // https://github.com/Leonidas-from-XIV/node-xml2js
    var xml2js = require('xml2js');
    var parser = new xml2js.Parser({explicitArray : false, mergeAttrs : true}) // Configured the parser to not abuse arrays and to merge the id tag.
    var xmlBuilder = new xml2js.Builder() // Used to write file in xml format.
    // Use this file to write and read the xml file.
    var LibraryDAO = {

        // Get the entire file from the file system.
        readXMLFile: async function(callback) { // Asynchronous function
          function asyncXML () {
            return new Promise(function (resolve, reject) {
              fs.readFile('./books.xml', 'utf-8', (error, text) => {
                let xmlBooks
                  if (error) {
                    reject(error)
                  } else {
                    resolve(parser.parseString(text, (err, result) => {
                      if (err) {
                        reject(err)
                      } else {
                        resolve(result['catalog']['book'])
                      }
                    }))
                  }
              })
            })
          }

          let data = await asyncXML()

          function asyncJSON () {
            return new Promise(function (resolve, reject) {
              fs.readFile('./app/dao/book.json', (error, text) => {
                  if (error) {
                    reject(error)
                  } else {
                    resolve(JSON.parse(text))
                  }
              })
            })
          }

          let book = await asyncJSON()

          if (book.length > 0) { // Before any changes are made, book.json will be empty: []. After loading in books.xml, book.json will inherit the book list and all changes will be saved in book.json.
            return book
          } else {
            return data
          }

        },

        // Write the entire file from the file system.
        writeXMLFile: async function(data, id) {
          let incoming = await LibraryDAO.readXMLFile()

          if (data.hasOwnProperty('publish_date')) { // Replaces publish_date key in the incoming data object with the key name publishDate.
            let oldKey = 'publish_date'
            let newKey = 'publishDate'
            Object.defineProperty(data, newKey,
              Object.getOwnPropertyDescriptor(data, oldKey))
            delete data[oldKey]
          }

          if (!data.hasOwnProperty('id') && isNaN(data) === true) { // Adds a book.
            let id = incoming.length + 1 // Used to generate new ID when books get added.
            incoming.forEach(element => {
              if (element.id === id) { // If the id already exist because of lacking logic... then..
                let id2 = id + 5 // It will add 5 to the list. I doubt there will be deleted 5 more books than we add to the system. Still not perfect but better.
                data.id = '' + id2
                incoming.push(data)
              }
            })
            data.id = '' + id // If the id aint dublicated.
            incoming.push(data)
          }

          if (isNaN(data) === false) {
            incoming.forEach(element => {
              if (element.hasOwnProperty('id')) {
                if (element.id === data) {
                  let index = incoming.indexOf(element)
                  if (index !== -1) {
                    incoming.splice(index, 1) // Removes a book according to its id.
                  }
                }
              }
            })
          }

          if (isNaN(id) === false) { // "id" argument is only send when editing books.
            incoming.forEach(element => {
              if (element.id === id) {
                let index = incoming.indexOf(element)
                if (index !== -1) {
                  incoming.splice(index, 1) // Removes the book to be edited according to its id.
                  incoming.push(data) // Instead of editing a specific attribute the entire book is replaced with its new attribute.
                }
              }
            })
          }

          let incomingData = JSON.stringify(incoming, null, 2)
          fs.writeFile('./app/dao/book.json', incomingData, (err) => { // Asynchronous function needed when writing.
            if (err) throw err
            console.log('data written to file')
          })
        }

    };

    module.exports = LibraryDAO;

}());
