const io = require('socket.io')({
  cors: {
    origin: "*",
  },
})

// let chatters = []

const newChatMessageEvent = "newChatMessage";

io.on("connection", (socket) => {
console.log(`Client ${socket.id} connected`);


// This is for when someone initially joins a conversation
const { room } = socket.handshake.query;
socket.join(room);
// const {user} = socket.handshake.query
// console.log(user)
// chatters.push(user)
// console.log(chatters)

// This is listening for new messages
socket.on(newChatMessageEvent, (data) => {
  io.in(room).emit(newChatMessageEvent, data);
});

// This is leaving the room if the user disconnects
socket.on("disconnect", () => {
  console.log(`Client ${socket.id} diconnected`);
  socket.leave(room);
});
});




module.exports = io
