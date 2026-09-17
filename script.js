const languageToggle = document.getElementById('languageToggle');
let telugu = false;
languageToggle.addEventListener('click', () => {
  telugu = !telugu;
  document.documentElement.lang = telugu ? 'te' : 'en';
  document.querySelectorAll('[data-en][data-te]').forEach(el => el.innerHTML = el.dataset[telugu ? 'te' : 'en']);
  languageToggle.textContent = telugu ? 'English' : 'తెలుగు';
});

document.querySelectorAll('.catalogue-tabs button').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.catalogue-tabs button').forEach(b => b.classList.remove('active'));
  button.classList.add('active');
  const brand = button.dataset.brand;
  document.querySelectorAll('.collection-card').forEach(card => card.hidden = brand !== 'all' && !card.classList.contains(brand));
}));

document.querySelectorAll('[data-product]').forEach(link => link.addEventListener('click', () => {
  document.querySelector('#orderForm select').value = link.dataset.product.startsWith('Berger') ? (link.dataset.product.includes('Primer') ? 'Berger Primers & Putty' : link.dataset.product.includes('Weather') ? 'Berger Exterior' : 'Berger Interior') : (link.dataset.product.includes('Primer') ? 'JSW Primers & Putty' : link.dataset.product.includes('Exterior') ? 'JSW Exterior' : 'JSW Interior');
}));

let chosenService = 'consultation';
document.querySelectorAll('.booking-types button').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.booking-types button').forEach(b => b.classList.remove('selected'));
  button.classList.add('selected'); chosenService = button.dataset.service;
  document.getElementById('bookingLink').href = `https://wa.me/?text=${encodeURIComponent(`Hello Sri Aditya Paints, I would like to book a ${chosenService}.`)}`;
}));

document.getElementById('orderForm').addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const message = `Hello Sri Aditya Paints, I would like a quote.\n\nName: ${form.get('name')}\nPhone: ${form.get('phone')}\nPaint system: ${form.get('product')}\nDetails: ${form.get('notes')}`;
  window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});
document.getElementById('shadeForm').addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const message = `Hello Sri Aditya Paints, please check instant tinting availability.\n\nBrand: ${form.get('shadeBrand')}\nShade: ${form.get('shade')}\nPack size: ${form.get('weight')}`;
  window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});
document.getElementById('year').textContent = new Date().getFullYear();
