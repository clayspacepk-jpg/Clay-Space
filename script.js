// Clay Space | Premium JS v1.0

document.addEventListener('DOMContentLoaded', () => {

  // 1. Smooth Scroll for any future anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // 2. Fade In Animation on Scroll - Apple Vibe
  const cards = document.querySelectorAll('.card');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });

  // 3. Toast Notification - Jab SOLD OUT pe click kare
  const disabledBtns = document.querySelectorAll('.btn-disabled');
  disabledBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      showToast('✨ New Drop Soon! WhatsApp pe join karo: 0334-8495357');
    });
  });

  function showToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--brown, #6F4E37);
      color: white;
      padding: 12px 20px;
      border-radius: 16px;
      font-weight: 600;
      font-size: 14px;
      z-index: 9999;
      opacity: 0;
      transition: opacity 0.3s ease;
      box-shadow: 0 8px 20px rgba(0,0,0,0.2);
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.style.opacity = 1, 10);
    setTimeout(() => {
      toast.style.opacity = 0;
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

});
