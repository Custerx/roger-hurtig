(function () {
    "use strict";

    var express = require('express');
    var router = express.Router();

    var AddBookResource = require('../../resources/AddBookResource');

    router.put('/', function (req, res) {
        res.type('json');

        AddBookResource(req.body, function () {
            res.send("{}");
        });
    });


    module.exports = router;
}());
