var CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/prohauling-relay/kffhjamcojjcihbnakfehcogdcdknheb';

function submitWelcomeTrial(lang) {
  var emailEl  = document.getElementById('tw-email-' + lang);
  var btnEl    = document.getElementById('tw-btn-' + lang);
  var btnText  = document.getElementById('tw-btn-text-' + lang);
  var errEl    = document.getElementById('tw-error-' + lang);
  var email    = emailEl.value.trim();

  var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!email || !emailRe.test(email)) {
    errEl.textContent = lang === 'es'
      ? 'Por favor ingresa un correo válido.'
      : 'Please enter a valid email address.';
    errEl.style.display = 'block';
    return;
  }

  errEl.style.display = 'none';
  btnText.textContent = lang === 'es' ? 'Enviando…' : 'Sending…';
  btnEl.disabled = true;

  fetch('https://prohauling-backend-production.up.railway.app/api/license/trial-signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email })
  })
  .then(function(r) { return r.json(); })
  .then(function(data) {
    if (data.success) {
      document.getElementById('twf-' + lang).style.display = 'none';
      document.getElementById('tw-success-' + lang).style.display = 'block';
      window.open(CHROME_STORE_URL, '_blank');
    } else {
      throw new Error(data.error || 'error');
    }
  })
  .catch(function() {
    btnText.textContent = lang === 'es' ? 'Activar Prueba' : 'Activate Trial';
    btnEl.disabled = false;
    errEl.textContent = lang === 'es'
      ? 'Algo salió mal. Inténtalo de nuevo.'
      : 'Something went wrong. Please try again.';
    errEl.style.display = 'block';
  });
}

function setLang(lang) {
  document.getElementById('lang-en').style.display = lang === 'en' ? 'flex' : 'none';
  document.getElementById('lang-es').style.display = lang === 'es' ? 'flex' : 'none';
  document.getElementById('btnEn').classList.toggle('active', lang === 'en');
  document.getElementById('btnEs').classList.toggle('active', lang === 'es');
  document.getElementById('backLink').textContent = lang === 'en' ? '← Back to home' : '← Inicio';
  localStorage.setItem('prh_lang', lang);
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btnEn').addEventListener('click', function() { setLang('en'); });
  document.getElementById('btnEs').addEventListener('click', function() { setLang('es'); });
  document.getElementById('tw-btn-en').addEventListener('click', function() { submitWelcomeTrial('en'); });
  document.getElementById('tw-btn-es').addEventListener('click', function() { submitWelcomeTrial('es'); });

  // restore saved language
  var saved = localStorage.getItem('prh_lang');
  if (saved === 'es') setLang('es');
});
