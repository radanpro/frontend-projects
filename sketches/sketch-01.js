// 3 ==> 09 Utility Functions
const canvasSketch = require("canvas-sketch");
const math = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");

const settings = {
  dimensions: [1080, 1080],
  // pixelsPerInch: 300,
  // orientation:'landscape'
};

// const degToRad = (degrees) => {
//   return degrees / 180 * Math.PI;
// };

// const randomRange = (min, max) => {
//   return Math.random() * (max - min) + min;
// };


const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.fillStyle = 'black';

    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.01;
    const h = height * 0.1;

    let x, y;

    const num = 12;
    const radius = width * 0.3;

    
    for (let i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num); // 360 / num = 30
      const angle = slice * i; // 0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330

      x = cx + Math.sin(angle) * radius; // 540 + (0, 0.5, 1, 0.5, 0, -0.5, -1, -0.5, 0, 0.5, 1, 0.5) * 324 = 540 + (0, 12, 24, 12, 0, -12, -24, -12, 0, 12, 24, 12)
      y = cy + Math.cos(angle) * radius;

      context.save();
      context.translate(x, y);
      context.rotate(-angle);
      context.scale(random.range(1, 3), 1 );

      context.beginPath();
      context.rect(-w * 0.5, -h * 0.5, w, h);
      context.fill();
      context.restore();
    }

    



  };
};

canvasSketch(sketch, settings);
