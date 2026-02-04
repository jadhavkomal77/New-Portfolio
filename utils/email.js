const nodemailer = require("nodemailer")


const sendEmail = ({ to, subject, message, html }) => new Promise((resolve, reject) => {
    console.log(to);
    console.log(subject);
    console.log(message);
    console.log(html);
    try {
        const mailer = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.FORM_EMAIL,
                pass: process.env.FORM_PASS
            }
        })
        mailer.sendMail({
            from: process.env.FORM_EMAIL,
            to,
            subject: subject,
            text: message,
            html: html
        }, (err) => {
            if (err) {
                console.log(err)
                return reject(err)
            } else {
                console.log("Email Sent Successfully")
                return resolve("Email Send Success")
            }
        })
    } catch (error) {
        console.log(error)
        return reject(error.message)
    }
})


module.exports = sendEmail