const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.end("Helllooooo");
});
router.get("/watermelon", (req, res) => {
  res.end("watermelon 🐓");
});
router.get("/watermelon/:id", (req, res) => {
  res.end("watermelon id");
});

module.exports = router;
