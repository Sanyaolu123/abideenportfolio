const nodemailer = require('nodemailer');
const emailValidator = require('deep-email-validator');
const saveContact = require("../models/models")

// async function isEmailValid(email) {
//   return await emailValidator.validate(email)
//  }

exports.AddContact = async (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;

  // res.send(`${name} which email is ${email} send this message: ${message}`);
  if(!name || !email || !message){ 
    res.json({ status: 400, message: "Missing Credentials!!" });
  }
  else{
    const {valid, reason, validators} =  await emailValidator.validate(email)
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
          from: `Abideen's Portfolio <${process.env.EMAIL}>`,
          to: `Abideen's Portfolio ${email}`,
          subject: 'You have contacted Abideen Sanyaolu',
          html: '<h2 style="text-align:center;">I will get back to you concerning your messsage in due times</h2><p style="text-align:center;">You can find my number on the portfolio <a href="abideenportfolio.infinityfreeapp.com">Abideen\'s Portfolio</a></p>'
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            res.json({ status: 400, message: `An Error Occurred` });
          } else {
            const saveNewContact = new saveContact({
              name: name,
              email: email,
              message: message
            });

            try{
            await saveNewContact.save()
            res.json({ status: 200, message: `Your message has been submitted!!` });
            }
            catch(error){
              res.json({ status: 400, message: `An Error Occurred` });
            }
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



