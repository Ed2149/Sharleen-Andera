// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Dark Mode Toggle with Icon & Label
const toggleBtn = document.getElementById('darkToggle');
const darkIcon = document.getElementById('darkIcon');
const darkLabel = document.getElementById('darkLabel');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  const isDark = document.body.classList.contains('dark-mode');
  darkIcon.textContent = isDark ? '☀️' : '🌙';
  darkLabel.textContent = isDark ? 'Light Mode' : 'Dark Mode';
});
