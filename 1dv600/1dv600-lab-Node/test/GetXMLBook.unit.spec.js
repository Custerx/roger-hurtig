var expect = require("chai").expect;
var GetXMLBook = require("../app/dao/GetXMLBook");

describe("Simple addition", function () {

    describe("describe what the test do here...", function () {

        it("describe..", function () {
            let books = GetXMLBook // Array containing the books as objects.
            console.log(books)
            books.forEach(function (element) {
              expect(element).to.have.property('author') // Bolean that returns true if the book object contains the key "author" else return false. False = test fails.
            })

        });
    });
});
