document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('leadForm');
  const submitBtn = document.getElementById('submitBtn');
  const telInput = document.getElementById('whatsapp');

  telInput.addEventListener('input', (e) => {
    let v = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    e.target.value = !v[2] ? v[1] : '(' + v[1] + ') ' + v[2] + (v[3] ? '-' + v[3] : '');
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitBtn.innerText = "Gerando Diagnóstico...";
    submitBtn.disabled = true;

    const empresa = document.getElementById('empresa').value.trim();
    const faturamento = document.getElementById('faturamento').value;
    const regime = document.getElementById('regime').value;
    const nome = document.getElementById('nome').value.trim();
    const whatsapp = document.getElementById('whatsapp').value.trim();

    const msg = `*NOVO DIAGNÓSTICO TRIBUTÁRIO (LP)*%0A%0A` +
      `*Empresa:* ${encodeURIComponent(empresa)}%0A` +
      `*Responsável:* ${encodeURIComponent(nome)}%0A` +
      `*WhatsApp:* ${encodeURIComponent(whatsapp)}%0A` +
      `*Faturamento:* ${encodeURIComponent(faturamento)}%0A` +
      `*Regime Atual:* ${encodeURIComponent(regime)}`;

    const waUrl = `https://wa.me/5583999999999?text=${msg}`;

    setTimeout(() => {
      window.open(waUrl, '_blank');
      submitBtn.innerText = "Solicitação Enviada!";
      submitBtn.style.background = "#059669";
      form.reset();
    }, 500);
  });
});
