// Basic interactivity: mobile nav toggle, simple filtering for deliverables
(function(){
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('#mobileToggle');
  if (toggle) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }

  // Deliverables filter: filter by year or type
  const filterInputs = document.querySelectorAll('[data-filter]');
  const items = Array.from(document.querySelectorAll('.deliverable'));
  if (filterInputs.length && items.length) {
    const apply = () => {
      const crit = {};
      filterInputs.forEach(i => { if (i.value) crit[i.dataset.filter] = i.value.toLowerCase(); });
      items.forEach(li => {
        const year = li.dataset.year || '';
        const type = (li.dataset.type || '').toLowerCase();
        const match = (!crit.year || crit.year === year) && (!crit.type || crit.type === type);
        li.style.display = match ? '' : 'none';
      });
    };
    filterInputs.forEach(i => i.addEventListener('change', apply));
  }

  // Spoof contact form submit
  const form = document.querySelector('#contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      alert('Thank you, ' + (data.name || 'there') + '! We\'ll be in touch.');
      form.reset();
    });
  }
})();
