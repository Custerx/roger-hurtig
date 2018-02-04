(function () {
    "use strict";

    var list = []
    var aBook = {id: '1', title: 'Is This A Real Book? Version: ', author: 'Roger Hurtig', genre: 'fiction', publishDate: '2011', price: '381', description: 'Does this book object exist and is it part of some bigger hardcoded list?'}
    for (let i = 1; i < 6; i++) {
      aBook[i] = {id: '' + i, title: 'Is This A Real Book? Version: ' + i, author: 'Roger Hurtig', genre: 'fiction', publishDate: '201' + i, price: '38' + i, description: 'Does this book object exist and is it part of some bigger hardcoded list?'}
      list.push(aBook[i])
    }
    var myJSON = JSON.stringify(list) // Console.log(JSON.stringify(list)) to display in terminal window.
    module.exports = myJSON;
}());
