var CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/prohauling-relay/kffhjamcojjcihbnakfehcogdcdknheb';

function goToStore() {
  window.open(CHROME_STORE_URL, '_blank');
}

function openTrialModal() {
  window.location.href = 'welcome.html';
}

function closeTrialModal() {
  var m = document.getElementById('trialModal');
  if (m) m.style.display = 'none';
}

function submitTrial() {
  var emailEl  = document.getElementById('trialEmailInput');
  var btnText  = document.getElementById('modal-btn-text');
  var errEl    = document.getElementById('modal-error');
  var btn      = document.getElementById('modal-submit-btn');
  var email    = emailEl ? emailEl.value.trim() : '';
  var re       = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (!email || !re.test(email)) {
    if (errEl) { errEl.textContent = 'Please enter a valid email.'; errEl.style.display = 'block'; }
    return;
  }
  if (errEl) errEl.style.display = 'none';
  if (btnText) btnText.textContent = 'Sending…';
  if (btn) btn.disabled = true;

  fetch('https://prohauling-backend-production.up.railway.app/api/license/trial-signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email })
  })
  .then(function(r) { return r.json(); })
  .then(function(d) {
    if (d.success) {
      var fv = document.getElementById('modal-form-view');
      var sv = document.getElementById('modal-success-view');
      if (fv) fv.style.display = 'none';
      if (sv) sv.style.display = 'block';
      window.open(CHROME_STORE_URL, '_blank');
    } else { throw new Error(d.error || 'error'); }
  })
  .catch(function() {
    if (btnText) btnText.textContent = 'Start Free Trial';
    if (btn) btn.disabled = false;
    if (errEl) { errEl.textContent = 'Something went wrong. Please try again.'; errEl.style.display = 'block'; }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  var btnTrial      = document.getElementById('btn-trial');
  var modalCloseBtn = document.getElementById('modal-close-btn');
  var trialEmail    = document.getElementById('trialEmailInput');
  var submitBtn     = document.getElementById('modal-submit-btn');
  var storeBtn      = document.getElementById('modal-store-btn');

  if (btnTrial)      btnTrial.addEventListener('click', openTrialModal);
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeTrialModal);
  if (trialEmail)    trialEmail.addEventListener('keydown', function(e) { if (e.key === 'Enter') submitTrial(); });
  if (submitBtn)     submitBtn.addEventListener('click', submitTrial);
  if (storeBtn)      storeBtn.addEventListener('click', goToStore);
});
