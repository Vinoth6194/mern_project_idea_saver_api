const mongoose = require("mongoose");
const ProjectIdeaSchema = mongoose.Schema({
  sno: { type: String, required: true },
  projectName: { type: String, required: true },
  status: { type: String, required: true },
});

const ProjectIdeaModel = mongoose.model("project_ideas", ProjectIdeaSchema);

module.exports = ProjectIdeaModel;
