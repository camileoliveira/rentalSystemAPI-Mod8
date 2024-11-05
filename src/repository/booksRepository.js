const books = [
  {
    id: 2,
    title: "Os sertões",
    author: "Euclides da Cunha",
    year: "1902",
    genre: "Livro-reportagem",
  },
];
const generateId = require("../utils/generateId");
const {rent} = require("../repository/rentalRepository")

function addBook(title, author, year, genre) {
  const id = generateId();

  const newBook = {
    id: id,
    title: title,
    author: author,
    year: year,
    genre: genre,
  };
  books.push(newBook);
  return newBook;
}

function listAll() {
  return books;
}

function deleteBook(id) {
  const i = books.findIndex((book) => book.id == id);
  const hasRental = rent.filter((rent)=> rent.idBook == id);

  if (hasRental) {
    return "Livro com aluguel ativo não pode ser apagado!";
  }
  
  books.splice(i, 1);
  return true;

}

function updateBook(id, title, author, year, genre) {
  const i = books.findIndex((book) => book.id == id);
  if (i == -1) {
    return false;
  }

  books[i].title = title;
  books[i].author = author;
  books[i].year = year;
  books[i].genre = genre;
  return books[i];
}

function listBookByTitle(title) {
  const filteredBook = books.filter((book) => book.title == title);
  return filteredBook;
}


function listBookByAuthor(author) {
  const filteredBook = books.filter((book) => book.author == author);
  return filteredBook;
}

function listBookByYear(year) {
  const filteredBook = books.filter((book) => book.year == year);
  return filteredBook ;
}

function listBookByGenre(genre) {
  const filteredBook = books.filter((book) => book.genre == genre);
  return filteredBook;
}

module.exports = {
  addBook,
  listAll,
  deleteBook,
  updateBook,
  listBookByAuthor,
  listBookByTitle,
  listBookByYear,
  listBookByGenre,
};
