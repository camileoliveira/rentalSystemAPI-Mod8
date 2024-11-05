const rent = [
  {
    id: 1,
    idBook: 2,
    idStudent: 1,
    dateRental: "2024-10-10",
    dateDevolution: "2024-01-11",
  },
];

const generateId = require("../utils/generateId");

function createRental(idBook, idStudent, dateRental, dateDevolution) {
  const id = generateId();
  const newRent = {
    id: id,
    idBook: idBook,
    idStudent: idStudent,
    dateRental: dateRental,
    dateDevolution: dateDevolution,
  };
  rental.push(newRent);
  return newRent;
}

function listAllRental() {
  return rent;
}

function updateById(id, idBook, idStudent, dateRental, dateDevolution) {
  const index = rent.findIndex((rent) => rent.id == id);
  if (index == -1) {
    return false;
  }
  rent[index].idBook = idBook;
  rent[index].idStudent = idStudent;
  rent[index].dateRental = dateRental;
  rent[index].dateDevolution = dateDevolution;
  return rent[index];
}

function removeRental(id) {
  const index = rent.findIndex((rent) => rent.id == id);

  if (index != -1) {
    rent.splice(index, 1);
    return true;
  }
}

function findByIdBook(idBook) {
  const rentFiltered = rent.filter((rent) => rent.idBook == idBook);
  return rentFiltered;
}

function findByIdStudent(idStudent) {
  const rentFiltered = rent.filter((rent) => rent.idStudent == idStudent);
  return rentFiltered;
}

function findByDate(dateRental) {
  const rentFiltered = rent.filter((rent) => rent.dateRental == dateRental);
  return rentFiltered;
}

function findByDateDevolution(dateDevolution) {
  const rentFiltered = rent.filter(
    (rent) => rent.dateDevolution == dateDevolution
  );
  return rentFiltered;
}

module.exports = {
  rent,
  createRental,
  listAllRental,
  updateById,
  removeRental,
  findByIdBook,
  findByIdStudent,
  findByDate,
  findByDateDevolution,
};
