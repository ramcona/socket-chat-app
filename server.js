const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(__dirname + "/public"));

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("join", (roomId) => {
    socket.join(roomId);
    console.log(`a user join room  ${roomId}`);
  });

  socket.on("chat message", (msg) => {
    io.to(msg.roomId).emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
