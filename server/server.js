const io = require("socket.io")(5000, {
    cors: {
      origin: "*", 
    },
  });
  
  console.log("Socket.IO server running on port 5000");
  
  io.on("connection", (socket) => {
    console.log("New client connected");
  
    socket.on("sendMessage", (message) => {
      io.emit("message", message); 
    });
  
    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });
  

// api/socket.js
// const { Server } = require("socket.io");

// module.exports = (req, res) => {
//   if (req.method === "OPTIONS") {
//     res.status(200).send("OK");
//     return;
//   }

//   const io = new Server(res.socket.server);

//   io.on("connection", (socket) => {
//     console.log("A user connected");

//     // Handle chat messages
//     socket.on("chat message", (msg) => {
//       io.emit("chat message", msg); // Broadcast to all clients
//     });

//     socket.on("disconnect", () => {
//       console.log("A user disconnected");
//     });
//   });

//   res.socket.server.io = io;
//   res.end();
// };
