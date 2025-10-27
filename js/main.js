// main.js

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const overlay = document.createElement('div');
  overlay.className = 'menu-overlay';
  document.body.appendChild(overlay);

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      overlay.classList.toggle('active');
      menuBtn.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰';
    });

    overlay.addEventListener('click', function() {
      navLinks.classList.remove('active');
      overlay.classList.remove('active');
      menuBtn.innerHTML = '☰';
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        menuBtn.innerHTML = '☰';
      });
    });
  }
});


// Smooth scrolling with offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Adjust this value (in pixels) to move the title up
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: targetPosition - offset,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll effect to navigation
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (nav) {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Hero section is always visible (only if it exists)
const hero = document.querySelector('.hero');
if (hero) {
    hero.style.opacity = '1';
    hero.style.transform = 'translateY(0)';
}



// Certificate functionality
document.addEventListener('DOMContentLoaded', function () {
  // Open local files or external URLs when cert links are clicked
  document.querySelectorAll('.cert-link').forEach(el => {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      const file = this.dataset.file;
      const url = this.dataset.url;
      if (url) {
        // external link (Credly etc.)
        window.open(url, '_blank', 'noopener');
      } else if (file) {
        // local file path relative to site root or repo folder
        // open in new tab so PDF or image can be displayed
        window.open(file, '_blank', 'noopener');
      }
    });
  });

  // Toggle sub-cert lists (expanded breakdown)
  document.querySelectorAll('.toggle-sub').forEach(btn => {
    btn.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      const container = this.closest('.cert-card').querySelector('.sub-certs');
      if (!container) return;
      if (expanded) {
        container.style.display = 'none';
        this.textContent = 'Show topics ▾';
      } else {
        container.style.display = 'block';
        this.textContent = 'Hide topics ▴';
      }
    });
  });
});