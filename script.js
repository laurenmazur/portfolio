// 1. Footer year updates itself
document.getElementById('year').textContent = new Date().getFullYear();

// 2. Live date and time in the hero (top left)
const dateEl = document.getElementById('date');
const timeEl = document.getElementById('time');

function tick() {
  const now = new Date();
  dateEl.textContent = now.toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });
  timeEl.textContent = now.toLocaleTimeString('en-US');
}

tick();
setInterval(tick, 1000);
