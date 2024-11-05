const {
  addStudents,
  listAll,
  updateById,
  removeStudent,
  findByName,
  findByRegistration,
  findByCourse,
  findByYear
} = require("../repository/studentsRepository");

function addStudentsService(name, registration, course, year) {
  return addStudents(name, registration, course, year);
}

function listAllService() {
  return listAll();
}

function updateByIdService(id, name, registration, course, year) {
  return updateById(id, name, registration, course, year);
}

function removeStudentService(id) {
  return removeStudent(id);
}

function findByNameService(name) {
  return findByName(name);
}

function findByRegistrationService(registration) {
  return findByRegistration(registration);
}

function findByCourseService(course) {
  return findByCourse(course);
}

function findByYearService(year){
  return findByYear(year)
}


module.exports = {
  addStudentsService,
  listAllService,
  updateByIdService,
  removeStudentService,
  findByNameService,
  findByRegistrationService,
  findByCourseService,
  findByYearService
};
