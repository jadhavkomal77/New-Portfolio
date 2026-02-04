const { register, emailSendByUser, getEmail, deleteEmail } = require("../controller/userController")

const router = require("express").Router()


router
    .get("/", getEmail)
    .post("/send-email", emailSendByUser)
    .delete("/delete-email/:adminId", deleteEmail)

module.exports = router