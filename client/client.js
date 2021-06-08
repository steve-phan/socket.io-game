const userSocket = io('http://localhost:3000/');

const button = document.getElementById('button');
const text = document.getElementById('text');

button.addEventListener('click', (e) => {
  console.log(io);
  userSocket.emit('hello', 'i am a human');
});

userSocket.on('hello', (msg) => {
  text.innerText = msg;
});
