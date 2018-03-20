var expect = require("chai").expect;
var data = require("../app/dao/addXMLBook");

describe("writeXMLBook", function () {

    describe("Testing properties of new books that been created by using the librarysystem", function () {

        it("the new book have no empty fields", async function () {
            var testBook = await data // Array containing the book object.
            
            expect(testBook).to.have.property('author').to.not.be.empty // the command not empty is not recommened to use, instead specific value of the target is to be recommened.
            expect(testBook).to.have.property('title').to.not.be.empty
            expect(testBook).to.have.property('description').to.not.be.empty
            expect(testBook).to.have.property('genre').to.not.be.empty
            expect(testBook).to.have.property('price').to.not.be.empty
            expect(testBook).to.have.property('publish_date').to.not.be.empty
            expect(testBook).to.have.property('id').to.not.be.empty
        });
    });
});
