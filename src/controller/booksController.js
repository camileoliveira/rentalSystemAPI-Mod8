
const {
  addBookService,
  listAllService,
  deleteBookService,
  updateBookService,
  listBookByAuthorService,
  listBookByTitleService,
  listBookByYearService,
  listBookByGenreService,
} = require("../service/booksService");

function addBookHandler(req, res) {
  const { title, author, year, genre } = req.body;
  const newBook = addBookService(title, author, year, genre);
  return res.status(200).send(newBook);
}

function listAllHandler(req, res) {
  const books = listAllService();
  return res.status(200).send(books);
}

function deleteBookHandler(req, res) {
  const { id } = req.params;
  const removedBook = deleteBookService(id);

  if (removedBook === true) {
    return res.status(200).send("Book removed");
  }

  if(removedBook){
    return res.status(404).send(removedBook)
  }

  return res.status(404).send("Book not found");
}

function updateBookHandler(req, res) {
  const { id } = req.params;
  const { title, author, year, genre } = req.body;
  const updateBook = updateBookService(id, title, author, year, genre);
  return res.status(200).send(updateBook);
}

function listBookHandler(req, res) {
  const { title, author, year, genre } = req.query;

  if (title) {
    const bookTitle = listBookByTitleService(title);
    return res.status(200).send(bookTitle);
  }

  if (author) {
    const bookAuthor = listBookByAuthorService(author);
    return res.status(200).send(bookAuthor);
  }

  if (year) {
    const bookYear = listBookByYearService(year);
    return res.status(200).send(bookYear);
  }

  if(genre){
    const bookGenre = listBookByGenreService(genre);
    return res.status(200).send(bookGenre)
  }

}

module.exports = {
  addBookHandler,
  listAllHandler,
  deleteBookHandler,
  updateBookHandler,
  listBookHandler
};
