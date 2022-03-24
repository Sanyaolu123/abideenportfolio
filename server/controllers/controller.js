const nodemailer = require('nodemailer');
const emailValidator = require('deep-email-validator');

async function isEmailValid(email) {
  return emailValidator.validate(email)
 }

exports.AddContact = (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;

  // res.send(`${name} which email is ${email} send this message: ${message}`);
  if(!name || !email || !message) res.json({ status: 400, message: "Missing Credentials" });
}



// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: `${process.env.EMAIL}`,
//     pass: `${process.env.EMAIL_PASS}`
//   }
// });

// var mailOptions = {
//   from: 'youremail@gmail.com',
//   to: 'myfriend@yahoo.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });