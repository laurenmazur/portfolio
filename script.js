// 1. Footer year updates itself
document.getElementById('year').textContent = new Date().getFullYear();

// 2. Hero name: weight follows the mouse left-to-right, width follows it up-and-down.
//    On phones/tablets (no mouse) it drifts slowly instead.
const nameEl = document.getElementById('name');
const canHover = window.matchMedia('(hover: hover)').matches;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const current = { x: 0.6, y: 0.8 };   // where the name is now (0 to 1)
const target  = { x: 0.6, y: 0.8 };   // where it is heading
let raf = null;

function apply() {
  nameEl.style.setProperty('--wght', Math.round(200 + current.x * 600));  // 200 (thin) to 800 (heavy)
  nameEl.style.setProperty('--wdth', (75 + current.y * 25).toFixed(1));   // 75 (narrow) to 100 (wide)
}

function step() {
  // ease toward the target so it feels smooth, not jumpy
  current.x += (target.x - current.x) * 0.1;
  current.y += (target.y - current.y) * 0.1;
  apply();
  const moving = Math.abs(target.x - current.x) > 0.002 || Math.abs(target.y - current.y) > 0.002;
  raf = moving ? requestAnimationFrame(step) : null;
}

function aim(x, y) {
  target.x = x;
  target.y = y;
  if (!raf) raf = requestAnimationFrame(step);
}

apply();

if (canHover) {
  window.addEventListener('pointermove', (e) => {
    aim(e.clientX / window.innerWidth, 1 - e.clientY / window.innerHeight);
  });
} else if (!reduceMotion) {
  setInterval(() => {
    const t = performance.now() / 1000;
    aim((Math.sin(t * 0.7) + 1) / 2, (Math.cos(t * 0.45) + 1) / 2);
  }, 100);
}
