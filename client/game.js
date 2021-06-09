const ball = document.getElementById('ball');
let num = 0;
window.addEventListener('keydown', (e) => {
  e.preventDefault();
  //   console.log(e.target);
  //   //   console.dir(ball.style);

  //   //   ball.style.left = '30px';
  //   requestAnimationFrame(() => move(ball));
  animate({
    duration: 500,
    timing: makeEaseOut(bounce),
    draw(progress) {
      ball.style.top = to * progress + 'px';
    },
  });
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
