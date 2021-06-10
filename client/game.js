// const canvas = /** @type {HTMLCanvasElement} */ (
//   document.getElementById('ball')
// );
const canvas = document.getElementById('ball');
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(25, 120); //coordinate
ctx.lineTo(100, 75); // Move to this coordinate
ctx.lineTo(100, 25); // Move to this coordinate
ctx.lineTo(280, 120);
ctx.fill(); // After all fill

// ctx.fillRect(25, 25, 100, 100);
// ctx.clearRect(45, 45, 60, 60);
// ctx.strokeRect(60, 60, 30, 30);

// ctx.fillStyle = 'rgb(100, 0, 0)';
// ctx.fillRect(10, 10, 50, 50);

// ctx.fillStyle = 'red';
// ctx.fillRect(30, 30, 90, 50);

// ctx.fillStyle = 'pink';
// ctx.strokeRect(80, 80, 100, 6);

let num = 0;

const coordinate = {
  x: 235,
  y: 0,
};

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  // ArrowDown ArrowUp ArrowLeft ArrowRight
  //   console.log(e.target);
  //   //   console.dir(ball.style);

  //   //   ball.style.left = '30px';
  //   requestAnimationFrame(() => move(ball));
  // animate({
  //   duration: 500,
  //   timing: makeEaseOut(bounce),
  //   draw(progress) {
  //     ball.style.top = to * progress + 'px';
  //   },
  // });
  console.log(e);

  switch (e.code) {
    case 'ArrowDown':
      if (coordinate.y === 7) return;
      coordinate.y -= 3;
      ball.style.bottom = coordinate.y + 'px';
      break;
    case 'ArrowUp':
      if (coordinate.y === 470) return;
      coordinate.y += 7;
      ball.style.bottom = coordinate.y + 'px';
      break;
    case 'ArrowRight':
      break;
    case 'ArrowLeft':
      break;

    default:
      break;
  }
});

function move(target) {
  num += 0.5;
  target.style.left = num + 'px';
  if (num < 10) {
    return requestAnimationFrame(() => move(target));
  }
}

// for (let i = 0; i < 10000; i++) {
//   console.log('hello');
// }
// let prev = performance.now();
// let times = 0;

// requestAnimationFrame(function measure(time) {
//   document.body.insertAdjacentHTML('beforeEnd', Math.floor(time - prev) + ' ');
//   prev = time;

//   if (times++ < 10) requestAnimationFrame(measure);
// });
function animate({ timing, draw, duration }) {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction goes from 0 to 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // calculate the current animation state
    let progress = timing(timeFraction);

    draw(progress); // draw it

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}
