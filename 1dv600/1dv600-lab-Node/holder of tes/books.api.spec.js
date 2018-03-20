var request = require('supertest');

var app = require("../app");

describe('GET /api/books', function() {
    it('Expect json content', function(done) {
      request(app)
        .get('/api/books')
        .set('Accept', 'application/json')
        .expect('Content-type', /json/)
        .expect(200, done)
    });
});

describe('GET /api/books', function() {
    it('AUTHOR key, TITLE key and ID key, MUST be in the incoming json data', function(done) {
      request(app)
        .get('/api/books')
        .set('Accept', 'application/json')
        .expect(function (res) {
          let data = res.body
          data.forEach(function (element) {
            if (!('author' in element)) {
              throw new Error('Incoming data is missing the author key')
            }
            if (!('id' in element)) {
              throw new Error('Incoming data is missing the id key')
            }
            if (!('title' in element)) {
              throw new Error('Incoming data is missing the title key')
            }
          })
        })
        .expect(200, done)
    });
});
