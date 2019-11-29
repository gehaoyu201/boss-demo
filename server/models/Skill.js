const mongoose = require('mongoose')
const model = new mongoose.Schema({
    category: { type: mongoose.SchemaTypes.ObjectId, ref: "Category" },
    name: { type: String },
})
module.exports = mongoose.model("Skill", model)