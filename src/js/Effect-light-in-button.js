const btnSpotlight = document.querySelectorAll('.btn-spotlight');

btnSpotlight.forEach((btn) => {
  let rafId = null;
  let pointerX = 0;
  let pointerY = 0;

  const updateSpotlight = () => {
    rafId = null;
    btn.style.setProperty('--x', `${pointerX}px`);
    btn.style.setProperty('--y', `${pointerY}px`);
  };

  btn.addEventListener('pointermove', (e) => {
    const rect = btn.getBoundingClientRect();
    pointerX = e.clientX - rect.left;
    pointerY = e.clientY - rect.top;

    if (rafId === null) {
      rafId = window.requestAnimationFrame(updateSpotlight);
    }
  });

  btn.addEventListener('pointerleave', () => {
    if (rafId !== null) {
      window.cancelAnimationFrame(rafId);
      rafId = null;
    }
  });
});
