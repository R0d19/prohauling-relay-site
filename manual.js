// Pr0HAULING Manual — external script (MV3 CSP compliant)

function setLang(lang) {
  document.querySelectorAll('[data-lang]').forEach(function(el) {
    el.classList.toggle('visible', el.getAttribute('data-lang') === lang);
  });
  var btnEN = document.getElementById('btnEN');
  var btnES = document.getElementById('btnES');
  if (btnEN) btnEN.classList.toggle('active', lang === 'en');
  if (btnES) btnES.classList.toggle('active', lang === 'es');
  try { localStorage.setItem('ph_manual_lang', lang); } catch(e) {}
}

document.addEventListener('DOMContentLoaded', function() {
  var btnEN = document.getElementById('btnEN');
  var btnES = document.getElementById('btnES');
  if (btnEN) btnEN.addEventListener('click', function() { setLang('en'); });
  if (btnES) btnES.addEventListener('click', function() { setLang('es'); });

  // Language priority: URL param → saved preference → default English
  var params = new URLSearchParams(window.location.search);
  var saved  = params.get('lang') || localStorage.getItem('ph_manual_lang') || 'en';
  setLang(saved);
});
