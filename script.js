// script.js
const balls = document.querySelectorAll('.ball');
balls.forEach(ball => {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  ball.style.left = `${x}px`;
  ball.style.top = `${y}px`;
  // add further animation logic (floating, drifting) 
});
