

import { animate, svg } from 'https://esm.sh/animejs';

// --- Recursive Koch Curve Generator ---
function kochCurvePoints(x1, y1, x2, y2, depth) {
  if (depth === 0) {
    return [[x1, y1], [x2, y2]];
  }
  const dx = x2 - x1;
  const dy = y2 - y1;
  const xA = x1 + dx / 3;
  const yA = y1 + dy / 3;
  const xB = x1 + dx * 2 / 3;
  const yB = y1 + dy * 2 / 3;

  // Calculate peak of the equilateral triangle
  const angle = Math.atan2(dy, dx) - Math.PI / 3;
  const dist = Math.sqrt(dx * dx + dy * dy) / 3;
  const xPeak = xA + dist * Math.cos(angle);
  const yPeak = yA + dist * Math.sin(angle);

  // Recursively get points
  const p1 = kochCurvePoints(x1, y1, xA, yA, depth - 1);
  const p2 = kochCurvePoints(xA, yA, xPeak, yPeak, depth - 1);
  const p3 = kochCurvePoints(xPeak, yPeak, xB, yB, depth - 1);
  const p4 = kochCurvePoints(xB, yB, x2, y2, depth - 1);
  
  // Concatenate, avoiding duplicate points
  return [
    ...p1.slice(0, -1),
    ...p2.slice(0, -1),
    ...p3.slice(0, -1),
    ...p4
  ];
}

function pointsToSvgPath(points) {
  return points.map(([x, y], i) => (i === 0 ? `M${x},${y}` : `L${x},${y}`)).join(' ');
}

// --- Insert SVG and Animate ---
const width = 600, height = 600, margin = 40;
const iterations = 3;
const startX = margin, startY = height / 2;
const endX = width - margin, endY = height / 2;
const points = kochCurvePoints(startX, startY, endX, endY, iterations);
const pathData = pointsToSvgPath(points);

// Create SVG and path inside a fixed-size, overflow-hidden container
const svgNS = 'http://www.w3.org/2000/svg';
const container = document.getElementById('container');

const svgElem = document.createElementNS(svgNS, 'svg');
svgElem.setAttribute('width', width);
svgElem.setAttribute('height', height);
svgElem.setAttribute('viewBox', `0 0 ${width} ${height}`);
svgElem.style.display = 'block';
svgElem.style.position = 'absolute';
svgElem.style.left = '0';
svgElem.style.top = '0';

const pathElem = document.createElementNS(svgNS, 'path');
pathElem.setAttribute('d', pathData);
pathElem.setAttribute('stroke', '#1976d2');
pathElem.setAttribute('stroke-width', '2');
pathElem.setAttribute('fill', 'none');
pathElem.setAttribute('id', 'koch-path');
svgElem.appendChild(pathElem);

container.appendChild(svgElem);

const updateButton = document.getElementById('updateButton');
const iterationInput = document.getElementById('iteration');

updateButton.addEventListener('click', () => {
  const iter = parseInt(iterationInput.value);
  if (isNaN(iter) || iter < 0 || iter > 6) {
    alert('Please enter a valid number of iterations between 0 and 6.');
    return;
  }
  const newPoints = kochCurvePoints(startX, startY, endX, endY, iter);
  const newPathData = pointsToSvgPath(newPoints);
  pathElem.setAttribute('d', newPathData);
});

// Animate the path drawing using anime.js
document.addEventListener('DOMContentLoaded', () => {
  const carAnimation = animate('.car', {
    ease: 'linear',
    duration: 3000,
    loop: true,
    ...svg.createMotionPath('path')
  });

  animate(svg.createDrawable('path'), {
    targets: '#koch-path',
    strokeDashoffset: [animate.setDashoffset, 0],
    draw: '0 1',
    easing: 'linear',
    duration: 3000,
    direction: 'alternate',
    loop: true
  });
});