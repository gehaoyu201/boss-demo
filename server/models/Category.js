const mongoose = require('mongoose')
const model = new mongoose.Schema({
    name: { type: String },
    icon: { type: String }
})
module.exports = mongoose.model("Category", model)