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
    // Sticky header
    var header = document.querySelector('.site-header');
    if (header) {
      window.addEventListener('scroll', function() {
        header.classList.toggle('scrolled', window.scrollY > 40);
      });
    }

    // Mobile nav
    var hamburger = document.querySelector('.hamburger');
    var mobileNav = document.querySelector('.mobile-nav');
    if (!hamburger || !mobileNav) return;

    hamburger.addEventListener('click', function(e) {
      e.stopPropagation();
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', function(e) {
      if (mobileNav.classList.contains('open') &&
          !mobileNav.contains(e.target) &&
          !hamburger.contains(e.target)) {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      }
    });

    // Close on Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      }
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

  // Loads Firebase compat SDKs on demand then calls back with db instance.
  // onSuccess(db) called when ready; onFail() called if config missing or error.
  initFirebase: function(onSuccess, onFail) {
    var cfg = this.firebaseConfig;
    if (!cfg || cfg.apiKey === 'YOUR_API_KEY') { if (onFail) onFail(); return; }
    // If already loaded
    if (typeof firebase !== 'undefined' && firebase.firestore) {
      try {
        if (!firebase.apps.length) firebase.initializeApp(cfg);
        onSuccess(firebase.firestore());
      } catch(e) { if (onFail) onFail(); }
      return;
    }
    var self = this;
    var s1 = document.createElement('script');
    s1.src = 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js';
    s1.onload = function() {
      var s2 = document.createElement('script');
      s2.src = 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-compat.js';
      s2.onload = function() {
        try {
          if (!firebase.apps.length) firebase.initializeApp(cfg);
          onSuccess(firebase.firestore());
        } catch(e) { if (onFail) onFail(); }
      };
      s2.onerror = function() { if (onFail) onFail(); };
      document.head.appendChild(s2);
    };
    s1.onerror = function() { if (onFail) onFail(); };
    document.head.appendChild(s1);
  },

  // requestAnimationFrame ensures KG_LAYOUT.inject()'s HTML
  // is fully in the live DOM before we attach event listeners
  init: function() {
    var self = this;
    requestAnimationFrame(function() {
      self.initHeader();
      self.initBackToTop();
      self.initScrollReveal();
      self.setActiveNav();
    });
  }

};
