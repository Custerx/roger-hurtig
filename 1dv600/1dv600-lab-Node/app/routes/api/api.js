(function () {
    "use strict";

    var express = require('express');
    var router = express.Router();
    var books = require('./books');
    var ping = require('./ping');
    // Created by me
    var getBook = require('./getBook');


    router.use('/books', books);
    router.use('/ping', ping);
    // Created by me
    router.use('/getBook', getBook);

    module.exports = router;
}());
