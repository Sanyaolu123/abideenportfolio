const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");
const cors = require("cors");


router.post("/addcontact", cors(), controller.AddContact)

module.exports = router;