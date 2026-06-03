/* ============================================
   bestxiao.asia — Main Interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ----- Mobile Nav Toggle -----
  const navToggle = document.querySelector('.nav__toggle');
  const navLinks = document.querySelector('.nav__links');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close menu on link click
    navLinks.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // ----- Nav Background on Scroll -----
  const nav = document.getElementById('nav');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 80) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
    lastScroll = currentScroll;
  });

  // ----- Scroll Reveal (Intersection Observer) -----
  const fadeEls = document.querySelectorAll('.fade-up');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optionally unobserve after reveal for performance
        // observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  fadeEls.forEach(el => observer.observe(el));

  // ----- Smooth Scroll for Anchor Links (fallback for older browsers) -----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ----- Parallax Hero Background (gentle mouse tracking) -----
  const heroBg = document.querySelector('.hero__bg');
  if (heroBg) {
    document.querySelector('.hero').addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      heroBg.style.transform = `translate(${x}px, ${y}px)`;
    });
  }

  // ----- Console Easter Egg -----
  console.log('%c 肖建军 · bestxiao.asia ', 'background: #c9a84c; color: #0c0c14; font-size: 1.2rem; padding: 8px 16px; font-weight: bold;');
  console.log('%c 产品管理 × AI 工具 · 探索永不止步 ', 'color: #8a8780; font-size: 0.9rem; padding: 4px 16px;');

});