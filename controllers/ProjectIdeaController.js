const express = require("express");
const router = express.Router();
const ProjectIdeaModel = require("../models/ProjectIdeas");
const ObjectID = require("mongoose").Types.ObjectId;

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

router.post("/", (req, res) => {
  var newIdea = new ProjectIdeaModel({
    sno: req.body.sno,
    projectName: req.body.projectName,
    status: req.body.status,
  });
  newIdea.save((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log(
        "Error in adding the record " + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

router.put("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send("No record with given id : " + req.params.id);
  }
  var updatedRecord = {
    sno: req.body.sno,
    projectName: req.body.projectName,
    status: req.body.status,
  };
  ProjectIdeaModel.findByIdAndUpdate(
    req.params.id,
    { $set: updatedRecord },
    { new: true },
    (err, docs) => {
      console.log(docs);
      if (!err) res.send(docs);
      else
        console.log(
          "Error while updating a record : " + JSON.stringify(err, undefined, 2)
        );
    }
  );
});

module.exports = router;
