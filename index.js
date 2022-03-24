const express = require("express");
const cors = require("cors");
const app = express();

const mongoose = require("mongoose");
const server = require("http").Server(app);
const router = require("./server/routers/routes");

require("dotenv").config()

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(cors({
  origin: "https://abideenportfolio.herokuapp.com"
}));
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Welcome to abideen's Api!");
})

app.use("/api", router);

server.listen(process.env.PORT || 5000)