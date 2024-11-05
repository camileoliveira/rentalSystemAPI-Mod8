const {
  createRentalService,
  listAllRentalService,
  updateByIdService,
  removeRentalService,
  findByIdBookService,
  findByIdStudentService,
  findByDateService,
  findByDateDevolutionService,
} = require("../service/rentalService");

function createRentalHandler(req, res) {
  const { idBook, idStudent, dateRental, dateDevolution } = req.body;
  const newRental = createRentalService(
    idBook,
    idStudent,
    dateRental,
    dateDevolution
  );
  return res.status(200).send(newRental);
}

function listAllHandlerRental(req, res) {
  const rental = listAllRentalService();
  return res.status(200).send(rental);
}

function updateByIdHandlerRental(req, res) {
  const { id } = req.params;
  const { idBook, idStudent, dateRental, dateDevolution } = req.body;
  const updateRental = updateByIdService(
    id,
    idBook,
    idStudent,
    dateRental,
    dateDevolution
  );
  return res.status(200).send(updateRental);
}

function removeRentalService(req, res) {
  const { id } = req.params;
  const removedRental = removeRentalService(id);

  if (removedRental) {
    return res.status(200).send("Rental removed");
  }

  return res.status(404).send("Rental not found");
}

function findRentalHandler(req, res) {
  const { idBook, idStudent, dateRental, dateDevolution } = req.query;
  if (idBook) {
    const idBookRental = findByIdBookService(idBook);
    return res.status(200).send(idBookRental);
  }

  if (idStudent) {
    const idStudentRental = findByIdStudentService(idStudent);
    return res.status(200).send(idStudentRental);
  }

  if (dateRental) {
    const rentalDate = findByDateService(dateRental);
    return res.status(200).send(rentalDate);
  }

  if (dateDevolution) {
    const dateDevolutionRental = findEmployeeBySalaryService(dateDevolution);
    return res.status(200).send(dateDevolutionRental);
  }
}

module.exports = {
  createRentalHandler,
  listAllHandlerRental,
  updateByIdHandlerRental,
  removeRentalService,
  findRentalHandler,
};
