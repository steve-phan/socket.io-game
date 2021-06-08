const socket = io('http://localhost:3000/');

const userName = document.getElementById('username');
const welcomeMessage = document.getElementById('welcome');

const messages = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');

let nickName = null;

userName.addEventListener('submit', (e) => {
  e.preventDefault();
  //   console.dir(userName);
  nickName = e.target[0].value;
  e.target[0].value = '';
  userName.style.display = 'none';
  welcomeMessage.innerHTML = `Welcome <span class='nickname'>${nickName}</span> to our Chat App`;
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (input.value) {
    socket.emit('chat message', input.value);
    input.value = '';
  }
});

socket.on('chat message', function (msg) {
  const item = document.createElement('li');
  item.textContent = nickName + ':' + msg;
  messages.appendChild(item);
  //   Keep new message display in the bottom
  messages.scrollTo(0, messages.scrollHeight);
});
