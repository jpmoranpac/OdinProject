const getTheTitles = function(bookList) {
    let titles = Array();
    for (book of bookList) {
        titles.push(book.title);
    }

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
