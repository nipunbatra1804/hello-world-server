const express = require("express");
const index = require("./routes/index");
const students = require("./routes/students");
const logger = (req, res, next) => {
  console.log("yo! wdyt? log req from", req.headers.host);

  next();
};
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", logger);
app.use("/students", students);
app.use("/", index);

app.get("/about", (req, res) => {
  res.send("sens something");
  console.log("at app");
  return;
});

app.get("/greet", (req, res) => {
  const { name } = req.body;
  res.send(`Hello ${name}`);
});

app.post("/receive", (req, res) => {
  const { name } = req.body;
  res.send(`Hello ${name}`);
});

module.exports = app;
