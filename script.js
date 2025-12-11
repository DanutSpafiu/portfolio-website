// ============================================
// NAVIGATION TOGGLE (MOBILE)
// ============================================

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
  });

  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    });
  });
}

// ============================================
// SMOOTH SCROLL ANIMATIONS
// ============================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all fade-in elements
document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(el => observer.observe(el));
});

// ============================================
// SKILL CARDS HOVER EFFECTS
// ============================================

const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05) translateY(-5px)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1) translateY(0)';
  });
});

// ============================================
// PROJECT CARDS HOVER EFFECTS
// ============================================

const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px)';
    this.style.boxShadow = '0 15px 40px rgba(0, 119, 190, 0.5)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = '';
  });
});

// ============================================
// BUTTON HOVER EFFECTS
// ============================================

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-2px)';
    this.style.boxShadow = '0 0 20px rgba(0, 119, 190, 0.6)';
  });
  
  button.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = '';
  });
});

// ============================================
// NAVBAR SCROLL EFFECT (OPTIMIZED)
// ============================================

let ticking = false;
const navbar = document.querySelector('.navbar');

function updateNavbar() {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    navbar.style.backgroundColor = 'rgba(245, 245, 240, 0.98)';
    navbar.style.borderBottomColor = 'rgba(0, 119, 190, 0.5)';
  } else {
    navbar.style.backgroundColor = 'rgba(245, 245, 240, 0.95)';
    navbar.style.borderBottomColor = 'rgba(0, 119, 190, 0.4)';
  }
  
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(updateNavbar);
    ticking = true;
  }
}, { passive: true });

// ============================================
// ACTIVE NAV LINK HIGHLIGHTING
// ============================================

const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  const linkHref = link.getAttribute('href');
  if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

// ============================================
// PARALLAX EFFECT FOR HERO SECTION (OPTIMIZED)
// ============================================

const hero = document.querySelector('.hero');
let parallaxTicking = false;

function updateParallax() {
  if (!hero) return;
  
  const scrolled = window.pageYOffset;
  const heroContent = hero.querySelector('.hero-content');
  
  if (heroContent && scrolled < window.innerHeight) {
    heroContent.style.transform = `translate3d(0, ${scrolled * 0.5}px, 0)`;
    heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
  }
  
  parallaxTicking = false;
}

if (hero) {
  window.addEventListener('scroll', () => {
    if (!parallaxTicking) {
      window.requestAnimationFrame(updateParallax);
      parallaxTicking = true;
    }
  }, { passive: true });
}

// ============================================
// INTEREST CARDS ANIMATION
// ============================================

const interestCards = document.querySelectorAll('.interest-card');
interestCards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.1}s`;
  
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// ============================================
// TIMELINE ANIMATION ON SCROLL
// ============================================

const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateX(0)';
      }, index * 200);
    }
  });
}, { threshold: 0.3 });

timelineItems.forEach(item => {
  item.style.opacity = '0';
  item.style.transform = 'translateX(-20px)';
  item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  timelineObserver.observe(item);
});

// ============================================
// SOCIAL LINKS HOVER EFFECT
// ============================================

const socialLinks = document.querySelectorAll('.social-links a');
socialLinks.forEach(link => {
  link.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-3px) scale(1.2)';
  });
  
  link.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// ============================================
// PROJECT BUTTON CLICK HANDLER (PLACEHOLDER)
// ============================================

const projectButtons = document.querySelectorAll('.btn-project');
projectButtons.forEach(button => {
  button.addEventListener('click', function(e) {
    // Add your project link logic here
    // For now, prevent default if href is '#'
    if (this.getAttribute('href') === '#') {
      e.preventDefault();
      // You can add a modal or redirect logic here
      console.log('Project button clicked - add your project URL');
    }
  });
});

