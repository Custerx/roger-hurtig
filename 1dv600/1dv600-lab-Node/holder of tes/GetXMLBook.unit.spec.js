var expect = require("chai").expect;
var GetXMLBook = require("../app/dao/GetXMLBook");

describe("GetXMLBook", function () {

    describe("Testing properties of booksInputTest.xml and books.xml", function () {

        it("all books in booksInputTest.xml contains the property title and the value is NOT empty" , async function () {
            var testBooks = await GetXMLBook.bookList() // Array containing the books as objects.

            testBooks.forEach(function (element) {
              expect(element).to.have.property('title').to.not.be.empty // the command not empty is not recommened to use, instead specific value of the target is to be recommened.
            })

        });

        it("all books in booksInputTest.xml contains the property author and the value is NOT empty" , async function () {
            var testBooks = await GetXMLBook.bookList() // Array containing the books as objects.

            testBooks.forEach(function (element) {
              expect(element).to.have.property('author').to.not.be.empty // the command not empty is not recommened to use, instead specific value of the target is to be recommened.
            })

        });

        it("all books in booksInputTest.xml contains the property price and the value is NOT empty" , async function () {
            var testBooks = await GetXMLBook.bookList() // Array containing the books as objects.

            testBooks.forEach(function (element) {
              expect(element).to.have.property('price').to.not.be.empty // the command not empty is not recommened to use, instead specific value of the target is to be recommened.
            })

        });

        it("all books in booksInputTest.xml contains the property genre and the value is NOT empty" , async function () {
            var testBooks = await GetXMLBook.bookList() // Array containing the books as objects.

            testBooks.forEach(function (element) {
              expect(element).to.have.property('genre').to.not.be.empty // the command not empty is not recommened to use, instead specific value of the target is to be recommened.
            })
        })

        it("all books in booksInputTest.xml contains the property publish_date and the value is NOT empty" , async function () {
            var testBooks = await GetXMLBook.bookList() // Array containing the books as objects.

            testBooks.forEach(function (element) {
              expect(element).to.have.property('publish_date').to.not.be.empty // the command not empty is not recommened to use, instead specific value of the target is to be recommened.
            })
        })

        it("booksInputTest.xml contains the same amount of books as books.xml", async function () {
            var books = await GetXMLBook.readXMLFile()
            var testBooks = await GetXMLBook.bookList() // Array containing the books as objects.

            expect(testBooks.length).to.equal(books.length)
        });
    });
});
