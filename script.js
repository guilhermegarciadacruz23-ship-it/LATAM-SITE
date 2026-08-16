document.addEventListener('DOMContentLoaded', () => {

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ============================================================
     4.1 — Abrir a porta do galpão
     ============================================================ */
  const dockDoor = document.getElementById('dockDoor');
  if (dockDoor){
    if (prefersReducedMotion){
      dockDoor.style.display = 'none';
    } else {
      setTimeout(() => dockDoor.classList.add('is-open'), 350);
    }
  }

  /* ============================================================
     4.2 — Revelar seções ao rolar (IntersectionObserver)
     ============================================================ */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => revealObserver.observe(el));

  /* ============================================================
     4.3 — Rolagem suave + fechamento do menu mobile
     ============================================================ */
  const scrollLinks = document.querySelectorAll('[data-scroll]');
  const navLinks = document.getElementById('navLinks');
  const navToggle = document.getElementById('navToggle');

  scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      const targetEl = document.querySelector(targetId);
      if (targetEl){
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      }
      if (navLinks && navLinks.classList.contains('is-open')){
        navLinks.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  /* ============================================================
     4.4 — Menu mobile
     ============================================================ */
  if (navToggle && navLinks){
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  /* ============================================================
     4.5 — Copiar e-mail / telefone
     ============================================================ */
  const toast = document.getElementById('toast');
  let toastTimer = null;

  function showToast(message){
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2200);
  }

  document.querySelectorAll('.copy-line').forEach(btn => {
    btn.addEventListener('click', async () => {
      const value = btn.getAttribute('data-copy');
      try {
        await navigator.clipboard.writeText(value);
        showToast(`Copiado: ${value}`);
      } catch (err) {
        showToast('Não foi possível copiar. Copie manualmente.');
      }
    });
  });

  /* ============================================================
     4.6 — Ano automático no rodapé
     ============================================================ */
  const yearEl = document.getElementById('year');
  if (yearEl){
    yearEl.textContent = new Date().getFullYear();
  }

  /* ============================================================
     4.7 — Realce que segue o cursor nos cards de contato
     ============================================================ */
  document.querySelectorAll('.contact-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mx', `${x}px`);
      card.style.setProperty('--my', `${y}px`);
    });
  });

});
