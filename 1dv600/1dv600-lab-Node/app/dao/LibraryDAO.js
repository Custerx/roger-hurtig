(function () {
    "use strict";

    var fs = require('fs');

    // Instructions how to use the xml2js
    // https://github.com/Leonidas-from-XIV/node-xml2js
    var xml2js = require('xml2js');
    
    // Use this file to write and read the xml file.
    var LibraryDAO = {

        // Get the entire file from the file system.
        readXMLFile: function(callback) { // Synchronous function
          let rawdata = fs.readFileSync('./app/dao/book.json') // Needs to be in the format: [{book attributes}]
          let book = JSON.parse(rawdata)
          return book
          /*
          fs.readFile('./app/dao/book.json', (err, readData) => { // Asynchronous function
            if (err) throw err

            let incoming = JSON.parse(readData)
            console.log(incoming)
          }) */
        },

        // Write the entire file from the file system.
        writeXMLFile: function(data, id) {
          fs.readFile('./app/dao/book.json', (err, readData) => { // Asynchronous function
            if (err) throw err

            let incoming = JSON.parse(readData)

            if (data.hasOwnProperty('publish_date')) { // Replaces publish_date key in the incoming data object with the key name publishDate.
              let oldKey = 'publish_date'
              let newKey = 'publishDate'
              Object.defineProperty(data, newKey,
                Object.getOwnPropertyDescriptor(data, oldKey))
              delete data[oldKey]
            }

            if (!data.hasOwnProperty('id') && isNaN(data) === true) { // Adds a book.
              let id = incoming.length + 1 // Used to generate new ID when books get added.
              data.id = '' + id
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
          })
        }

    };

    module.exports = LibraryDAO;
}());
