function setupCertificationFilter() {
  const buttons = document.querySelectorAll('.chip');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.setAttribute('aria-pressed', 'false'));
      button.setAttribute('aria-pressed', 'true');
    });
  });
}



if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupCertificationFilter);
} else {
  setupCertificationFilter();
}