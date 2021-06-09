const socket = io('http://localhost:3000/');

const userName = document.getElementById('username');
const welcomeMessage = document.getElementById('welcome');
const userNotice = document.getElementById('notice');

const messages = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');

let nickName = null;
let tempMessage = null;
let temId = null;

userName.addEventListener('submit', (e) => {
  e.preventDefault();
  //   console.dir(userName);
  nickName = e.target[0].value;
  e.target[0].value = '';
  userName.style.display = 'none';
  welcomeMessage.innerHTML = `Welcome <span class='nickname'>${nickName}</span> to our Chat App`;
});
input.addEventListener('input', (e) => {
  const payload = { nickName };
  socket.emit('user typing', payload);
});

socket.on('user typing', (payload) => {
  if (nickName !== payload.nickName) {
    userNotice.textContent = `${payload.nickName} is typing!`;
    if (temId) {
      clearTimeout(temId);
    }
    // after 0.3s if user do not type anything just remove notice
    temId = setTimeout(() => {
      userNotice.textContent = '';
      temId = null;
    }, 300);
  }
});

// input.onchange = () => console.log('hello world');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (input.value && tempMessage !== input.value) {
    const payload = { nickName, text: input.value };
    socket.emit('chat message', payload);
  } else {
    displayMessage({ nickName, text: input.value });
  }
  tempMessage = input.value;
  input.value = '';
});

socket.on('chat message', displayMessage);

function displayMessage({ nickName, text }) {
  const item = document.createElement('li');
  item.textContent = nickName + ':' + text;
  messages.appendChild(item);
  //   Keep new message display in the bottom
  messages.scrollTo(0, messages.scrollHeight);
  userNotice.textContent = '';
}
