const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

mongoose.connect(
  "mongodb://localhost:27017/projectIdeaSaver",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("Mongo Connected --Project Idea Saver");
    } else {
      console.log("Error in Mongo" + JSON.stringify(err, undefined, 2));
    }
  }
);
