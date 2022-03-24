const nodemailer = require('nodemailer');
const emailValidator = require('deep-email-validator');


async function isEmailValid(email) {
  return emailValidator.validate(email)
 }

exports.AddContact = async (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;

  // res.send(`${name} which email is ${email} send this message: ${message}`);
  if(!name || !email || !message){ 
    res.json({ status: 400, message: "Missing Credentials!!" });
  }
  else{
    const {valid, reason, validators} = await isEmailValid(email)
    if(valid){
      if(message.length < 20){
        res.json({ status: 400, message: "Message is not detailed!!" })
      }else{
        var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: `${process.env.EMAIL}`,
            pass: `${process.env.EMAIL_PASS}`
          }
        });
        
        var mailOptions = {
          from: `Abideen Portfolio <${process.env.EMAIL}>`,
          to: `Abideen Portfolio ${email}`,
          subject: 'You have contacted Abideen Sanyaolu',
          html: '<h3>I will get back to you concerning your messsage in due times</h3><br /><p>You can find my number on the portfolio <a href="abideenportfolio.infinityfreeapp.com">Abideen\'s Portfolio</a></p>'
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            res.json({ status: 400, message: `${process.env.EMAIL, process.env.EMAIL_PASS}` });
          } else {
            res.json({ status: 200, message: `${info.response}` });
          }
        });
      }
    }
    else{
      res.json({ status: 400, message: "Invalid Email Address!!" })
    }
  }

  // res.json({ status: 200, message: "Success"})
}



