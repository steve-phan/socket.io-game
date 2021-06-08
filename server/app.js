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
});

http.listen(3000, () => {
  console.log('listening on port 3000');
});
