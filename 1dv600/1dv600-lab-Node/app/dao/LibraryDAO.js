(function () {
    "use strict";

    var fs = require('fs');

    // Instructions how to use the xml2js
    // https://github.com/Leonidas-from-XIV/node-xml2js
    var xml2js = require('xml2js');

    // Use this file to write and read the xml file.
    var LibraryDAO = {

        // Get the entire file from the file system.
        readXMLFile: function(callback) {
          let parser = new xml2js.Parser();
          fs.readFile(__dirname + '../../books.xml', function (err, data) {
            parser.parseString(data, function (err, result) {
              console.dir(result);
              console.log('Done');
            });
          });
        },

        // Write the entire file from the file system.
        writeXMLFile: function(data) {
          var obj = {name: "Super", Surname: "Man", age: 23}; // data

          var builder = new xml2js.Builder();
          var xml = builder.buildObject(obj);
          console.log(xml)
        }
    };

    module.exports = LibraryDAO;
}());
