const mongoose = require("mongoose")
const model = new mongoose.Schema({
    name: { type: String },
    options: [{ type: String }]
})
module.exports = mongoose.model("Filter", model)