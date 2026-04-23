// Kashmir Glide — Header & Footer HTML (plain JS, no ES modules)

window.KG_LAYOUT = {
  header: function() {
    return `
<header class="site-header">
  <div class="header-inner">
    <a href="index.html" class="logo">
      <div class="logo-icon">
        <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
      </div>
      <div>
        <span class="brand-name">Kashmir Glide</span>
        <span class="brand-sub">Tour &amp; Travels</span>
      </div>
    </a>
    <nav class="main-nav">
      <a href="index.html" class="nav-link">Home</a>
      <a href="about.html" class="nav-link">About</a>
      <a href="tours.html" class="nav-link">Tours</a>
      <a href="destinations.html" class="nav-link">Destinations</a>
      <a href="vehicles.html" class="nav-link">Vehicles</a>
      <a href="gallery.html" class="nav-link">Gallery</a>
      <a href="contact.html" class="nav-link">Contact</a>
    </nav>
    <div class="header-cta">
      <a href="tel:9149606265" class="btn-call">
        <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
        Call Now
      </a>
      <a href="book.html" class="btn-book">Book Now</a>
    </div>
    <button class="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>
<nav class="mobile-nav">
  <a href="index.html" class="nav-link">Home</a>
  <a href="about.html" class="nav-link">About</a>
  <a href="tours.html" class="nav-link">Tours</a>
  <a href="destinations.html" class="nav-link">Destinations</a>
  <a href="vehicles.html" class="nav-link">Vehicles</a>
  <a href="gallery.html" class="nav-link">Gallery</a>
  <a href="contact.html" class="nav-link">Contact</a>
  <a href="book.html" class="btn-primary" style="margin-top:1rem;text-align:center">Book a Tour</a>
  <div style="margin-top:1rem;display:flex;gap:1.5rem;padding:.75rem 0">
    <a href="tel:9149606265" style="font-size:.88rem;color:var(--green);font-weight:500">📞 9149606265</a>
    <a href="https://wa.me/919149606265" style="font-size:.88rem;color:var(--green);font-weight:500" target="_blank">💬 WhatsApp</a>
  </div>
</nav>`;
  },

  footer: function() {
    return `
<footer class="site-footer">
  <div class="footer-grid">
    <div class="footer-brand">
      <a href="index.html" class="logo">
        <div class="logo-icon" style="width:36px;height:36px">
          <svg viewBox="0 0 24 24" style="width:18px;height:18px"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        </div>
        <div>
          <span class="brand-name">Kashmir Glide</span>
          <span class="brand-sub" style="color:var(--gold-light)">Tour &amp; Travels</span>
        </div>
      </a>
      <p>Your trusted travel partner in the Valley of Kashmir. From snow-capped peaks to serene shikaras — we craft journeys that stay with you forever.</p>
      <div class="footer-reg">
        🏛️ Registered with Dept. of Tourism, Govt. of J&K<br>
        Excursion Agent &nbsp;·&nbsp; Reg. No: <strong>JKEA00005750</strong><br>
        Valid till: 31 December 2027
      </div>
      <div class="footer-socials">
        <a href="https://www.facebook.com/share/1bhDPkbMcW/" target="_blank" class="social-btn" aria-label="Facebook">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
        </a>
        <a href="https://www.instagram.com/kashmirglidetour_andtravels" target="_blank" class="social-btn" aria-label="Instagram">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
        </a>
        <a href="https://makemetop.in/?biz=dYg6mj200XxTmej0faY3" target="_blank" class="social-btn" aria-label="Business Profile">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        </a>
        <a href="https://wa.me/919149606265" target="_blank" class="social-btn" aria-label="WhatsApp">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.762.466 3.418 1.279 4.857L2 22l5.283-1.246A9.924 9.924 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
        </a>
      </div>
    </div>
    <div>
      <h4 class="footer-heading">Quick Links</h4>
      <nav class="footer-links">
        <a href="index.html">Home</a>
        <a href="about.html">About Us</a>
        <a href="tours.html">Tour Packages</a>
        <a href="destinations.html">Destinations</a>
        <a href="vehicles.html">Our Vehicles</a>
        <a href="gallery.html">Gallery</a>
        <a href="book.html">Book a Tour</a>
      </nav>
    </div>
    <div>
      <h4 class="footer-heading">Explore</h4>
      <nav class="footer-links">
        <a href="destinations.html#gulmarg">Gulmarg</a>
        <a href="destinations.html#pahalgam">Pahalgam</a>
        <a href="destinations.html#sonamarg">Sonamarg</a>
        <a href="destinations.html#dal-lake">Dal Lake</a>
        <a href="destinations.html#tangmarg">Tangmarg</a>
        <a href="contact.html">Contact Us</a>
        <a href="privacy-policy.html">Privacy Policy</a>
        <a href="terms.html">Terms &amp; Conditions</a>
      </nav>
    </div>
    <div>
      <h4 class="footer-heading">Get In Touch</h4>
      <div class="footer-contact">
        <div class="footer-contact-item">
          <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>Iqbal Colony, Tangmarg, Baramulla, J&K — 193402</span>
        </div>
        <div class="footer-contact-item">
          <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          <a href="tel:9149606265">9149606265</a>
        </div>
        <div class="footer-contact-item">
          <svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a9.626 9.626 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 2C6.477 2 2 6.477 2 12c0 1.762.466 3.418 1.279 4.857L2 22l5.283-1.246A9.924 9.924 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
          <a href="https://wa.me/919149606265" target="_blank">+91 91496 06265</a>
        </div>
        <div class="footer-contact-item">
          <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          <span>kashmirglide.com</span>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2025 Kashmir Glide Tour &amp; Travels. All rights reserved.</span>
    <div class="footer-bottom-links">
      <a href="privacy-policy.html">Privacy Policy</a>
      <a href="terms.html">Terms &amp; Conditions</a>
      <a href="sitemap.xml">Sitemap</a>
    </div>
  </div>
</footer>

<div class="float-btns">
  <a href="https://wa.me/919149606265?text=Hello!%20I%27m%20interested%20in%20a%20Kashmir%20tour." target="_blank" class="float-btn whatsapp" aria-label="WhatsApp Us">
    <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a9.626 9.626 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 2C6.477 2 2 6.477 2 12c0 1.762.466 3.418 1.279 4.857L2 22l5.283-1.246A9.924 9.924 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
  </a>
  <a href="tel:9149606265" class="float-btn phone" aria-label="Call Us">
    <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
  </a>
</div>
<button id="backToTop" aria-label="Back to top">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 15l-6-6-6 6"/></svg>
</button>`;
  },

  inject: function() {
    var hp = document.getElementById('header-placeholder');
    var fp = document.getElementById('footer-placeholder');
    if (hp) hp.innerHTML = this.header();
    if (fp) fp.innerHTML = this.footer();
  }
};
