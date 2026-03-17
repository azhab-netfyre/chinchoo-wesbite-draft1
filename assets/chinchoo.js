// Chinchoo micro-interactions
document.addEventListener('DOMContentLoaded', function() {
  // Product card secondary image on hover
  document.querySelectorAll('[data-secondary-image]').forEach(function(card) {
    var primary = card.querySelector('.product-card__primary');
    var secondary = card.querySelector('.product-card__secondary');
    if (!primary || !secondary) return;
    card.addEventListener('mouseenter', function() {
      primary.style.opacity = '0';
      secondary.style.opacity = '1';
    });
    card.addEventListener('mouseleave', function() {
      primary.style.opacity = '1';
      secondary.style.opacity = '0';
    });
  });

  // Fade-in sections on scroll
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in-section').forEach(function(el) {
    observer.observe(el);
  });
});
