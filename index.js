const express = require("express");
const app = express();
const server = require("http").Server(app);
const router = require("./server/routers/routes");

app.use("/", router);

server.listen(process.env.PORT)