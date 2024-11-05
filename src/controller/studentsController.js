const {
  addStudentsService,
  listAllService,
  updateByIdService,
  removeStudentService,
  findByNameService,
  findByRegistrationService,
  findByCourseService,
  findByYearService
} = require("../service/studentsService");

function addStudentsHandler(req, res) {
  const { name, registration, course, year } = req.body;
  newStudent = addStudentsService(name, registration, course, year);
  return res.status(200).send(newStudent);
}

function listAllStudentHandler(req, res) {
  const students = listAllService();
  return res.status(200).send(students);
}

function updateByIdHandler(req, res) {
  const {id} = req.params
  const {name, registration, course, year } = req.body;
  const updatedStudents = updateByIdService(
    id,
    name,
    registration,
    course,
    year
  );
  return res.status(200).send(updatedStudents);
}

function removeStudentHandler(req, res) {
  const { id } = req.params;
  const removedStudent = removeStudentService(id);

  if (removedStudent === true) {
    return res.status(200).send("student removed");
  }

  if(removedStudent){
    return res.status(422).send(removedStudent)
  }

  return res.status(400).send("student not found");
}

function findStudentHandler(req, res) {
  const { name, registration, course, year } = req.query;

  if (name) {
    const studentName = findByNameService(name);
    return res.status(200).send(studentName);
  }

  if (registration) {
    const studentRegistration = findByRegistrationService(registration);
    return res.status(200).send(studentRegistration);
  }

  if (course) {
    const studentCourse = findByCourseService(course);
    return res.status(200).send(studentCourse);
  }

  if (year) {
    const studentYear = findByYearService(year);
    return res.status(200).send(studentYear);
  }
}


module.exports = {
    addStudentsHandler, 
    listAllStudentHandler,
    updateByIdHandler,
    removeStudentHandler, 
    findStudentHandler
}