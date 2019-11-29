const mongoose = require("mongoose");
const model = new mongoose.Schema({
    username: { type: String, unique: true },
    password: { type: String }
})
module.exports = mongoose.model('User', model)