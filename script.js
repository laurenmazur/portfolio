// 1. Footer year updates itself
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// 2. Live date and time in the hero (home page only)
const dateEl = document.getElementById('date');
const timeEl = document.getElementById('time');

if (dateEl && timeEl) {
  const tick = () => {
    const now = new Date();
    dateEl.textContent = now.toLocaleDateString('en-US', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
    timeEl.textContent = now.toLocaleTimeString('en-US');
  };
  tick();
  setInterval(tick, 1000);
}
