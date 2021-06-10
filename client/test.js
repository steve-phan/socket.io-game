// const canvas = /** @type {HTMLCanvasElement} */ (
//   document.getElementById('ball')
// );
const canvas = document.getElementById('ball');
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d');

// var img = new Image();
// img.onload = function () {
//   console.log('this is 1');
//   ctx.drawImage(img, 0, 0, 600, 400);
//   // ctx.beginPath();
//   // ctx.moveTo(30, 96);
//   // ctx.lineTo(70, 66);
//   // ctx.lineTo(103, 76);
//   // ctx.lineTo(170, 15);
//   // ctx.stroke();
// };
// img.src = './images/luly.jpg';
// console.log('this is 2');

// ctx.font = '48px serif';
// ctx.textAlign = 'center';
// ctx.fillText('Hello world', canvas.width, 50);

// ctx.fillStyle = 'deeppink';
// ctx.beginPath();
// ctx.arc(50, 50, 50, 0, Math.PI * 2, true);
// ctx.arc(50, 50, 30, 0, Math.PI * 2, true);
// ctx.arc(50, 50, 15, 0, Math.PI * 2, true);
// ctx.fill('evenodd');

// ctx.shadowOffsetX = 8;
// ctx.shadowOffsetY = 8;
// ctx.shadowBlur = 6;
// ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';

// ctx.font = '20px Times New Roman';
// ctx.fillStyle = 'deeppink';
// ctx.fillRect(30, 30, 80, 80);
// ctx.canvas.addEventListener('click', (e) => {
//   console.log('clicked', e);
//   e.offsetX = 100;
// });

// create new image object to use as pattern
//

// Create gradients
// var lingrad = ctx.createLinearGradient(0, 0, 0, 150);
// lingrad.addColorStop(0, '#00ABEB');
// lingrad.addColorStop(0.5, '#fff');
// lingrad.addColorStop(0.7, 'green');
// lingrad.addColorStop(1, '#fff');

// var lingrad2 = ctx.createLinearGradient(0, 50, 0, 95);
// lingrad2.addColorStop(0, 'white');
// lingrad2.addColorStop(1, 'rgba(0, 0, 0, 0)');

// // assign gradients to fill and stroke styles
// ctx.fillStyle = lingrad;
// ctx.strokeStyle = lingrad2;

// // draw shapes
// ctx.fillRect(10, 10, 130, 130);
// ctx.strokeRect(50, 50, 50, 50);

// var offset = 0;

// function draw() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.setLineDash([2, 8]);
//   ctx.lineDashOffset = offset;
//   ctx.strokeRect(10, 10, 100, 100);
// }

// function march() {
//   offset++;
//   if (offset > 16) {
//     offset = 0;
//   }
//   draw();
//   setTimeout(march, 80);
// }

// march();

// for (var i = 0; i < 10; i++) {
//   ctx.lineWidth = 1 + i;
//   ctx.beginPath();
//   ctx.moveTo(5 + i * 14, 5);
//   ctx.lineTo(5 + i * 14, 140);
//   ctx.stroke();
// }

// ctx.fillStyle = '#FD0';
// ctx.fillRect(0, 0, 75, 75);
// ctx.fillStyle = '#6C0';
// ctx.fillRect(75, 0, 75, 75);
// ctx.fillStyle = '#09F';
// ctx.fillRect(0, 75, 75, 75);
// ctx.fillStyle = '#F30';
// ctx.fillRect(75, 75, 75, 75);
// ctx.fillStyle = '#FFF';

// // ctx.globalAlpha = 0.07;
// ctx.fillStyle = 'rgba(255, 255, 255, 0.18)';

// for (var i = 0; i < 7; i++) {
//   // ctx.fillStyle = 'red';
//   ctx.beginPath();
//   ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
//   ctx.fill();
// }
// console.log(ctx);

ctx.beginPath();
ctx.moveTo(83, 116);
ctx.lineTo(83, 102);
ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
ctx.lineTo(111, 116);
ctx.lineTo(106.333, 111.333);
ctx.lineTo(101.666, 116);
ctx.lineTo(97, 111.333);
ctx.lineTo(92.333, 116);
ctx.lineTo(87.666, 111.333);
ctx.lineTo(83, 116);
ctx.fill();

// const rectangle = new Path2D(ctx);

// rectangle.rect(10, 10, 50, 50);
// ctx.stroke(rectangle);

// ctx.beginPath();

// roundedRect(ctx, 12, 12, 150, 150, 15);
// roundedRect(ctx, 19, 19, 150, 150, 9);
// roundedRect(ctx, 53, 53, 49, 33, 10);
// roundedRect(ctx, 53, 119, 49, 16, 6);
// roundedRect(ctx, 135, 53, 49, 33, 10);
// roundedRect(ctx, 135, 119, 25, 49, 10);

// ctx.beginPath();
// ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
// ctx.lineTo(31, 37);
// ctx.fill();

// for (var i = 0; i < 8; i++) {
//   ctx.fillRect(51 + i * 16, 35, 4, 4);
// }

// for (i = 0; i < 6; i++) {
//   ctx.fillRect(115, 51 + i * 16, 4, 4);
// }

// for (i = 0; i < 8; i++) {
//   ctx.fillRect(51 + i * 16, 99, 4, 4);
// }

// ctx.fillStyle = 'white';
// ctx.beginPath();
// ctx.moveTo(91, 96);
// ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
// ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
// ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
// ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
// ctx.moveTo(103, 96);
// ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
// ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
// ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
// ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
// ctx.fill();

// function roundedRect(ctx, x, y, width, height, radius) {
//   ctx.beginPath();
//   ctx.moveTo(x, y + radius);
//   ctx.lineTo(x, y + height - radius);
//   ctx.arcTo(x, y + height, x + radius, y + height, radius);
//   ctx.lineTo(x + width - radius, y + height);
//   ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
//   ctx.lineTo(x + width, y + radius);
//   ctx.arcTo(x + width, y, x + width - radius, y, radius);
//   ctx.lineTo(x + radius, y);
//   ctx.arcTo(x, y, x, y + radius, radius);
//   ctx.stroke();
// }

// ctx.arcTo(50, 50, 70, 70, 50);
// ctx.arc(75, 75, 50, 0, Math.PI * 0.2, false); // Outer circle

// ctx.moveTo(110, 75);
// ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
// ctx.moveTo(65, 65);
// ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
// ctx.moveTo(95, 65);
// ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
// ctx.fill();
// ctx.stroke();

// ctx.moveTo(20, 20);
// ctx.lineTo(30, 40);
// ctx.lineTo(40, 50);
// ctx.moveTo(60, 70);
// ctx.lineTo(80, 120);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(25, 120); //coordinate
// ctx.lineTo(100, 75); // Move to this coordinate
// ctx.lineTo(100, 25); // Move to this coordinate
// ctx.lineTo(280, 120);
// ctx.fill(); // After all fill

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
