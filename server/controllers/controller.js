const express = require("express");

exports.AddContact = (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;

  res.send(`${name} which email is ${email} send this message: ${message}`);
}