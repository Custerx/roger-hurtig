(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    var Books = require('../dao/Books')

    module.exports = function (id, callback) {
      // callback(Books)
      callback(LibraryDAO.readXMLFile(id))
    };

}());
