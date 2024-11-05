let students = [
  { id: 1, name: "Carol", registration: 20241, course: "SI", year: 2022 },
];

const generateId = require("../utils/generateId");
const {rent} = require("../repository/rentalRepository")

function addStudents(name, registration, course, year) {
  const id = generateId();
  const newStudents = {
    id: id,
    name: name,
    registration: registration,
    course: course,
    year: year,
  };
  students.push(newStudents);
  return newStudents;
}

function listAll() {
  return students;
}

function updateById(id, name, registration, course, year) {
  const index = students.findIndex((student) => student.id == id);
  if (index == -1) {
    return false;
  }
  students[index].name = name;
  students[index].registration = registration;
  students[index].course = course;
  students[index].year = year;
  return students[index];
}


function removeStudent(id) {
  const index = students.findIndex((student) => student.id == id);
  const hasRental = rent.filter((rent)=> rent.idStudent == id);

  if (hasRental) {
    return "Estudante com aluguel ativo não pode ser apagado!";
  }

  students.splice(index, 1);
  return true;

}

function findByName(name) {
  const studentFiltered = students.filter((student) => student.name == name);
  return studentFiltered;
}

function findByRegistration(registration) {
  const studentFiltered = students.filter(
    (student) => student.registration == registration
  );
  return studentFiltered;
}

function findByCourse(course) {
  const studentFiltered = students.filter(
    (student) => student.course == course
  );
  return studentFiltered;
}

function findByYear(year) {
  const studentFiltered = students.filter((student) => student.year == year);
  return studentFiltered;
}

module.exports = {
  addStudents,
  listAll,
  updateById,
  removeStudent,
  findByName,
  findByRegistration,
  findByCourse,
  findByYear,
};
