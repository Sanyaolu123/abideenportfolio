const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");


router.post("/addcontact", controller.Home)

module.exports = router;