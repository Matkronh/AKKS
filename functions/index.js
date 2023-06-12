const functions = require("firebase-functions");
const admin = require("firebase-admin");
const sgMail = require("@sendgrid/mail");

admin.initializeApp();

sgMail.setApiKey(
    "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");

exports.sendEmail = functions.https.onRequest((req, res) => {
  const {title, message, email} = req.body;

  const msg = {
    to: "akksbusinessinquiry@gmail.com",
    from: "akksbusinessinquiry@gmail.com",
    subject: `New Message: ${title}`,
    text: `${message}\n\nFrom: ${email}`,
  };

  sgMail.send(msg)
      .then(() => {
        res.status(200).send("Email sent successfully");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        res.status(500).send("Error sending email");
      });
});
