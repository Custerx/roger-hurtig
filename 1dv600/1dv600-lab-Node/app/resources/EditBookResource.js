(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    var Books = require('../dao/Books')
    
    module.exports = function (id, data, callback) {    
      callback(LibraryDAO.writeXMLFile(data, id))
    };

}());
