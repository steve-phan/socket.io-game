const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http, { cors: { origin: '*' } });

app.get('/', (req, res) => {
  res.send('Hello socket.io');
});

io.on('connection', (socket) => {
  socket.on('chat message', (payload) => {
    console.log(payload);
    io.emit('chat message', payload);
  });
  socket.on('user typing', (payload) => {
    io.emit('user typing', payload);
  });
});

http.listen(3000, () => {
  console.log('listening on port 3000');
});
