const express = require("express");
const router = express.Router();
const ProjectIdeaModel = require("../models/ProjectIdeas");

router.get("/", (req, res) => {
  res.json({ message: "Welcome to Project Idea Saver using MERN." });
});
module.exports = router;
