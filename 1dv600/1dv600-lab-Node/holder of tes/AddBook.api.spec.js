(function () {
    "use strict";

    var request = require('supertest');
    var app = require("../app");

    describe('POST /api/books/:bookId', function() {
        it('SUCCESSFULLY posted a book with the attributes author: me mario, title: another title, description: api stories, genre: api genre', function(done) {
        request(app)
            .post('/api/books/:bookId')
            .set('Accept', 'application/json')
            .send({
                author: 'me mario',
                title: 'another title',
                description: 'api stories',
                genre: 'api genre'
            })
            .expect(200, done)
        })
    });

}());
