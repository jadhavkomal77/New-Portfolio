const mongoose = require("mongoose")

const projectsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    hero: {
        type: String,
        // required: true
    },

}, { timestamps: true })

module.exports = mongoose.model("projects", projectsSchema)