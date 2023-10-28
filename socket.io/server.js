const express = require("express");
const app = express();
const { createServer } = require("node:http");
const path = require("path");
const { Server } = require("socket.io");

const port = 3200;
const server = createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/view/index.html"));
});

io.on("connection", (socket) => {
  socket.on("messenger", (msg) => {
    console.log("message: " + msg);
  });
});

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
  console.log(`http://localhost:${port}`);
});
