const mongoose = require('mongoose')
const model = new mongoose.Schema({
    name: { type: String },
    jobTime: { type: String },
    school: { type: String },
    money: { type: String },
    jobInfo: { type: String },
    skills: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Skill" }],
    hr: {
        name: { type: String },
        work: { type: String },
        icon: { type: String }
    },
    company: [{
        name: { type: String },
        allName: { type: String },
        city: { type: String },
        address: { type: String },
        icon: { type: String },
        image: { type: String },
        info: { type: String },
        type: { type: String },
        bank: { type: String },
        people: { type: String },
    }]
}, {
    timestamps: true
});
module.exports = mongoose.model("Job", model)