(function () {
    "use strict";

    var list = []
    var aBook = {id: 0, title: 'Is This A Real Book? Version: ', author: 'Roger Hurtig', genre: 'fiction', publish_date: 2013, price: 384, description: 'Does this book object exist and is it part of some bigger hardcoded list?'}
    for (let i = 1; i < 6; i++) {
      aBook[i] = {id: 0 + i, title: 'Is This A Real Book? Version: ' + i, author: 'Roger Hurtig', genre: 'fiction', publish_date: 2013 + i, price: 384 - i, description: 'Does this book object exist and is it part of some bigger hardcoded list?'}
      list.push(aBook[i])
    }
    var myJSON = JSON.stringify(list) // Console.log(JSON.stringify(list)) to display in terminal window.

    module.exports = myJSON;
}());
