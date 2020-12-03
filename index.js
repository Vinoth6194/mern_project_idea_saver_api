const express = require("express");
const app = express();
const bodyParser = require("body-parser");

require("./db");
var projectIdeaRoutes = require("./controllers/ProjectIdeaController");
app.use(bodyParser.json());
app.use("/", projectIdeaRoutes);
app.listen(5000, () => {
  console.log("Server running for MERN Project Idea Server ......");
});
