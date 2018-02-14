(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    var Books = require('../dao/Books')

    module.exports = async function (callback, title) { // The title is optional and is only present when searching. (You need yo modify the books.js file first)
      // callback(Books)
      callback(await LibraryDAO.readXMLFile())
    };

}());
