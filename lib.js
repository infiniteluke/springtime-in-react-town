const interpolate = (value, start, end, limit) => start + (value / limit) * (end - start);

export const calc = (
  rotation,
  scale,
  mouseX,
  mouseY,
  { offsetTop, offsetLeft, offsetWidth, offsetHeight }
) => [
  interpolate(
    mouseY - offsetTop + window.pageYOffset,
    rotation,
    -rotation,
    offsetWidth
  ),
  interpolate(
    mouseX - offsetLeft + window.pageXOffset,
    -rotation,
    rotation,
    offsetHeight
  ),
  scale,
];

export const transform = (x, y, s) =>
  `perspective(800px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export const fast = { tension: 1200, friction: 40 };
export const slow = { mass: 10, tension: 200, friction: 50 };
export const transformGoo = (x, y) =>
  `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;
