// Copyright (c) 2026 Prohauling Relay. All rights reserved. Copyright Registration Pending, Case No. 1-15165834861. U.S. Patent Pending No. 64/068,633.
// Unauthorized copying, distribution, or modification is prohibited.
(function() {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const dots   = Array.from(document.querySelectorAll('.dot'));
  const counter = document.getElementById('slide-counter');
  const progressBar = document.getElementById('progress-bar');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  let current = 0;

  function setActive(idx) {
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
    counter.textContent = (idx + 1) + ' / ' + slides.length;
    progressBar.style.width = ((idx + 1) / slides.length * 100) + '%';
    current = idx;
  }

  // Intersection observer to track which slide is in view
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting && e.intersectionRatio >= 0.5) {
        setActive(+e.target.dataset.index);
      }
    });
  }, { threshold: 0.5 });
  slides.forEach(s => observer.observe(s));

  // Dot clicks
  dots.forEach((d, i) => {
    d.addEventListener('click', () => slides[i].scrollIntoView({ behavior: 'smooth' }));
  });

  // Arrow buttons
  btnPrev.addEventListener('click', () => {
    if (current > 0) slides[current - 1].scrollIntoView({ behavior: 'smooth' });
  });
  btnNext.addEventListener('click', () => {
    if (current < slides.length - 1) slides[current + 1].scrollIntoView({ behavior: 'smooth' });
  });

  // Keyboard arrows
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      e.preventDefault();
      if (current < slides.length - 1) slides[current + 1].scrollIntoView({ behavior: 'smooth' });
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault();
      if (current > 0) slides[current - 1].scrollIntoView({ behavior: 'smooth' });
    }
  });
})();
