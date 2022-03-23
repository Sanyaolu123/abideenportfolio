const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/api", controller.Home)

module.exports = router;