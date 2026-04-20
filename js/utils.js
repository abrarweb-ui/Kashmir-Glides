// Kashmir Glide — Shared Utilities (plain JS, no imports)

window.KG = {
  // Firebase config — replace with your actual values
  firebaseConfig: {
    apiKey: "AIzaSyCdcQ9Rl4kxCJPeXIiRSdhB0rGN0OlmQAw",
  authDomain: "kashmir-glides.firebaseapp.com",
  projectId: "kashmir-glides",
  storageBucket: "kashmir-glides.firebasestorage.app",
  messagingSenderId: "542165837541",
  appId: "1:542165837541:web:aecbc8801b1b943a10d60c"
  },

  initHeader: function() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    window.addEventListener('scroll', function() {
      header.classList.toggle('scrolled', window.scrollY > 40);
    });
    const btn = document.querySelector('.hamburger');
    const nav = document.querySelector('.mobile-nav');
    if (btn && nav) {
      btn.addEventListener('click', function() {
        btn.classList.toggle('open');
        nav.classList.toggle('open');
        document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
      });
    }
    // close mobile nav on link click
    document.querySelectorAll('.mobile-nav .nav-link').forEach(function(link) {
      link.addEventListener('click', function() {
        btn && btn.classList.remove('open');
        nav && nav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  },

  initBackToTop: function() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    window.addEventListener('scroll', function() {
      btn.classList.toggle('visible', window.scrollY > 400);
    });
    btn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  },

  initScrollReveal: function() {
    var els = document.querySelectorAll('[data-reveal]');
    if (!els.length) return;
    var io = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
    els.forEach(function(el) { io.observe(el); });
  },

  setActiveNav: function() {
    var path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(function(link) {
      var href = link.getAttribute('href');
      if (href === path || (path === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  },

  showToast: function(msg, type) {
    var t = document.getElementById('siteToast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'siteToast';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.className = 'show ' + (type || '');
    setTimeout(function() { t.className = ''; }, 3200);
  },

  formatPrice: function(num) {
    return '₹' + Number(num).toLocaleString('en-IN');
  },

  init: function() {
    this.initHeader();
    this.initBackToTop();
    this.initScrollReveal();
    this.setActiveNav();
  }
};
