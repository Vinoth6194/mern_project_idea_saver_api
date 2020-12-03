const express = require("express");
const app = express();

require("./db");

app.listen(5000, () => {
  console.log("Server running for MERN Project Idea Server ......");
});
