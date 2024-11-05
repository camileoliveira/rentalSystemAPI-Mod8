const {
  addBook,
  listAll,
  deleteBook,
  updateBook,
  listBookByAuthor,
  listBookByTitle,
  listBookByYear,
  listBookByGenre,
} = require("../repository/booksRepository");

function addBookService(title, author, year, genre) {
  return addBook(title, author, year, genre);
}

function listAllService() {
  return listAll();
}

function deleteBookService(id) {
  return deleteBook(id);
}

function updateBookService(id, title, author, year, genre) {
  return updateBook(id, title, author, year, genre);
}

function listBookByAuthorService(author){
    return listBookByAuthor(author)
}

function listBookByTitleService(title){
    return listBookByTitle(title)
}

function listBookByYearService(year){
    return listBookByYear(year)
}

function listBookByGenreService(genre){
    return listBookByGenre(genre)
}

module.exports = {
  addBookService,
  listAllService,
  deleteBookService,
  updateBookService,
  listBookByAuthorService,
  listBookByTitleService,
  listBookByYearService,
  listBookByGenreService
};
