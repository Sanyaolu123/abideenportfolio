const express = require("express");
const app = express();

const mongoose = require("mongoose");
const server = require("http").Server(app);
const router = require("./server/routers/routes");

require("dotenv").config()

mongoose.connect(process.env.MONGODB_URI)

app.use("/", router);

server.listen(process.env.PORT || 5000)