const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");


router.get("/api/addcontact", controller.Home)

module.exports = router;