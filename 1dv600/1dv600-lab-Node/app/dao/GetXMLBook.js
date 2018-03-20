(function () {
  "use strict"
  var fs = require('fs')
  var xml2js = require('xml2js');
  var parser = new xml2js.Parser({explicitArray : false, mergeAttrs : true}) // Configured the parser to not abuse arrays and to merge the id tag.

  var bookTest = {
    bookList: async function () {
      function asyncXML () {
        return new Promise(function (resolve, reject) {
          fs.readFile('./app/dao/booksInputTest.xml', 'utf-8', (error, text) => { // Reads the booksInputTest.xml file which is the file I will change the input with.
            var xmlBooks
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
      var data = await asyncXML()
      return data
    },
    readXMLFile: async function(callback) { // A copy of LibraryDAO.js readXMLFile function.
      function asyncXML () {
        return new Promise(function (resolve, reject) {
          fs.readFile('./books.xml', 'utf-8', (error, text) => {
            var xmlBooks
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
      var data2 = await asyncXML()
      return data2
    }
  }
  module.exports = bookTest
}())
