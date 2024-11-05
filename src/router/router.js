const express = require("express");
const router = express.Router();
const {
  addBookHandler,
  listAllHandler,
  deleteBookHandler,
  updateBookHandler,
  listBookHandler,
} = require("../controller/booksController");
const {
  addStudentsHandler,
  listAllStudentHandler,
  updateByIdHandler,
  removeStudentHandler,
  findStudentHandler,
} = require("../controller/studentsController");

const {
  createRentalHandler,
  listAllHandlerRental,
  updateByIdHandlerRental,
  removeRentalService,
  findRentalHandler,
} = require("../controller/rentalController");

router.post("/book", addBookHandler);
router.post("/student", addStudentsHandler);
router.post("rental", createRentalHandler);

router.get("/book", listAllHandler);
router.get("/book/search", listBookHandler);
router.get("/student", listAllStudentHandler);
router.get("/student/search", findStudentHandler);
router.get("/rental", listAllHandlerRental);
router.get("/rental/search", findRentalHandler);

router.delete("/book/:id", deleteBookHandler);
router.delete("/student/:id", removeStudentHandler);
router.delete("/rental/:id", removeRentalService);

router.put("/book/:id", updateBookHandler);
router.put("/student/:id", updateByIdHandler);
router.put("/rental/:id", updateByIdHandlerRental);

module.exports = router;
