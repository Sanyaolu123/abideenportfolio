const express = require("express");

exports.Home = (req, res) => {
  res.send("Hello Api!");
}