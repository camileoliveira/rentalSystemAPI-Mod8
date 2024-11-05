const {
  createRental,
  listAllRental,
  updateById,
  removeRental,
  findByIdBook,
  findByIdStudent,
  findByDate,
  findByDateDevolution,
} = require("../repository/rentalRepository");

function createRentalService(idBook, idStudent, dateRental, dateDevolution) {
  return createRental(idBook, idStudent, dateRental, dateDevolution);
}

function listAllRentalService() {
  listAllRental();
}

function updateByIdService(id, idBook, idBook, dateRental, dateDevolution) {
  return updateById(id, idBook, idBook, dateRental, dateDevolution);
}

function removeRentalService(id) {
  return removeRental(id);
}

function findByIdBookService(idBook) {
  return findByIdBook(idBook);
}

function findByIdStudentService(idStudent) {
  return findByIdStudent(idStudent);
}

function findByDateService(dateRental) {
  return findByDate(dateRental);
}

function findByDateDevolutionService(dateDevolution) {
  return findByDateDevolution(dateDevolution);
}

module.exports = {
  createRentalService,
  listAllRentalService,
  updateByIdService,
  removeRentalService,
  findByIdBookService,
  findByIdStudentService,
  findByDateService,
  findByDateDevolutionService,
};
