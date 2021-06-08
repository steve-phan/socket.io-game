const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http, { cors: { origin: '*' } });

app.get('/', (req, res) => {
  res.send('Hello socket.io');
});

io.on('connection', (socket) => {
  console.log('User connected', socket.id);
  socket.on('hello', (msg) => {
    console.log(msg);
    io.emit(
      'hello',
      `send back u a random number ${Math.floor(Math.random() * 100)}`
    );
  });
});

http.listen(3000, () => {
  console.log('listening on port 3000');
});
