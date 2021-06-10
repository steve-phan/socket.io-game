// const canvas = /** @type {HTMLCanvasElement} */ (
//   document.getElementById('ball')
// );
const canvas = document.getElementById('ball');
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d');
console.log(ctx);
ctx.fillStyle = '#0095DD';
ctx.rotate((Math.PI / 180) * 45);
ctx.fillRect(250, 250, 100, 100);
