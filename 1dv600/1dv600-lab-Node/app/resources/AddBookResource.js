(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    var Books = require('../dao/Books')

    module.exports = function (data, callback) {
      callback(LibraryDAO.writeXMLFile(data))
    };

}());
