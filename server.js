const express = require('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

require('dotenv').config();
require('./config/database');

// const http = require('http').Server(app)
// const io = require('./io')
// io.attach(http)

const server = require('http').createServer()
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

const PORT = 4000;


const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";

io.on("connection", (socket) => {
  console.log(`Client ${socket.id} connected`);

  // Join a conversation
  const { room } = socket.handshake.query;
  socket.join(room);

  // Listen for new messages
  socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
    io.in(room).emit(NEW_CHAT_MESSAGE_EVENT, data);
  });

  // Leave the room if the user closes the socket
  socket.on("disconnect", () => {
    console.log(`Client ${socket.id} diconnected`);
    socket.leave(room);
  });
});


const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const resourcesRouter = require('./routes/resources');
const flashCardRouter = require('./routes/flashcards')

const cors = require('cors')


app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));


app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/resources', resourcesRouter)
app.use('/api/flashcards', flashCardRouter)

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, ()=> {
  console.log(`Express is listening on port ${port}.`)
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})