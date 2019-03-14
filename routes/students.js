const express = require("express");
const router = express.Router();

const students = [
  { id: "123", name: "bob", subjects: ["science", "math"] },
  { id: "124", name: "marley", subjects: ["english", "math"] },
  { id: "125", name: "john", subjects: ["science", "history"] }
];

router
  .route("/")
  .get((req, res) => {
    // res.type("json");
    // res.send("GET students");
    res.json(students);
  })
  .post((req, res) => {
    const student = req.body;
    student.id = "123456";
    student.subjects = [];
    students.push(student);
    res.status(201);
    res.json(student);
  });

router
  .route("/:id")
  .put((req, res) => {
    const student = req.body;
    const id = req.params.id;
    let found = students.find(elem => elem.id === id);
    found = student;
    res.status(202);
    res.json({ id: "123", name: "alfred", subjects: ["science", "sociology"] });
  })
  .delete((req, res) => {
    res.send("Delete Students");
  });

module.exports = router;
