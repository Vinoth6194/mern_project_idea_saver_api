const express = require("express");
const router = express.Router();
const ProjectIdeaModel = require("../models/ProjectIdeas");

router.get("/", (req, res) => {
  //res.json({ message: "Welcome to Project Idea Saver using MERN." });
  ProjectIdeaModel.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log(
        "Error in retrieving the records " + JSON.stringify(err, undefined, 2)
      );
    }
  });
});
module.exports = router;
