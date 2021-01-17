const io = require('socket.io')()

// io.on('connection', function (socket) {
//   console.log('Client connected to socket.io!');
// });

let chatters = {}


io.on('connection', (socket) => {
  // This is where all of our server-side socket.io functionality will exist.  
  console.log('socket.io is connected')
})

module.exports = io