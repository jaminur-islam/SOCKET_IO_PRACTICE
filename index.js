const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// =============================Start server to client ==========================================//
/* let i = 0;
let y = 1;
io.on("connect", (socket) => {
  console.log("User connect ", ++i, "total =", i);
  socket.on("disconnect", () => {
    --i;
    console.log("User leave", y++, "total =", i);
  });
});
console.log("total", i); */
let i = 0;
/* io.on("connect", (socket) => {
  setInterval(() => {
    const time = new Date();
    const myTime = time.getTime();
    socket.send(myTime);
  }, 1000);
});
 */
/* io.on("connect", (socket) => {
  setInterval(() => {
    const time = new Date();
    const mytime = time.getTime();
    socket.emit("myTime", mytime);
  }, 1000);
}); */
// =============================End server to client ==========================================//

// =============================Start receive to client data ==========================================//
/* io.on("connect", (socket) => {
  socket.on("myClientData", (msg) => {
    console.log(msg);
  });
}); */

//=============================   BROADCASTING ===================================//
/* io.on("connect", (socket) => {
  io.sockets.emit("MyBroadcasting", "Hello Everyone");
}); */

//============================ BROADCASTING NAME SPACE GROUPING =======================//
const buyName = io.of("/buy");
buyName.on("connect", (socket) => {
  socket.emit("myEvent", "Hi buy event");
});

const sellName = io.of("/sell");
sellName.on("connect", (socket) => {
  socket.emit("myEvent", "My sell event");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.listen(3000, () => {
  console.log("Server running port 3000");
});
