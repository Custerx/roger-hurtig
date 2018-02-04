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
        },

        // Write the entire file from the file system.
        writeXMLFile: function(data) {
          fs.readFile('./app/dao/book.json', (err, readData) => { // Asynchronous function
            if (err) throw err

            let incoming = JSON.parse(readData)

            console.log(data)
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
            let incomingData = JSON.stringify(incoming, null, 2)
            fs.writeFile('./app/dao/book.json', incomingData, (err) => { // Asynchronous function needed when writing.
              if (err) throw err
              console.log('data written to file')
            })
          })
        },
        appendFiles: function (data) {
          fs.appendFile('./app/dao/book.json', data, (err) => {
            if (err) throw err
            console.log('data appended')
          })
        }
    };

    module.exports = LibraryDAO;
}());
