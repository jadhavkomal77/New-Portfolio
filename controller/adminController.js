const asyncHandler = require("express-async-handler")
const Projects = require("../models/Projects")

exports.getProjects = asyncHandler(async (req, res) => {
    const result = await Projects.find()
    res.json({ message: "get Projects success", result })
})
exports.addProjects = asyncHandler(async (req, res) => {
    await Projects.create(req.body)
    res.json({ messgae: "add Project Success" })
})

exports.updateProjects = asyncHandler(async (req, res) => {
    const { userId } = req.params
    await Projects.findByIdAndUpdate(userId, req.body)
    res.json({ message: "update Projects success" })
})
exports.delteProjects = asyncHandler(async (req, res) => {
    const { userId } = req.params
    await Projects.findByIdAndDelete(userId)
    res.json({ message: "delete Projects success" })
})