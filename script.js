document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
  });
});

document.querySelectorAll('.nav-links li a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: 'mooth'
    });
  });
});

// Add hover effect to download button
document.querySelector('.download-btn').addEventListener('mouseover', () => {
  document.querySelector('.download-btn').style.background = 'rgba(0, 0, 0, 0.2)';
});

document.querySelector('.download-btn').addEventListener('mouseout', () => {
  document.querySelector('.download-btn').style.background = '';
});

// Add event listener to menu toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('show');
});