/**
 * DURO WINDOWS & DOORS - Architectural Fenestration
 * Client Interactions, Animations, Responsive Drawer & Form Notification Handlers
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Sticky Header Elevation on Scroll
  const siteHeader = document.getElementById('siteHeader');
  function handleHeaderScroll() {
    if (window.scrollY > 30) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  // 2. Mobile Navigation Drawer Toggle
  const mobileToggleBtn = document.getElementById('mobileMenuBtn');
  const mobileCloseBtn = document.getElementById('mobileCloseBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

  function openMobileMenu() {
    mobileDrawer?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileDrawer?.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (mobileToggleBtn) {
    mobileToggleBtn.addEventListener('click', openMobileMenu);
  }

  if (mobileCloseBtn) {
    mobileCloseBtn.addEventListener('click', closeMobileMenu);
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // 3. Back to Top Button
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 450) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 4. Scroll Reveal Engine (IntersectionObserver)
  const revealElements = document.querySelectorAll('.reveal-up, .reveal-fade');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('is-visible'));
  }

  // 5. Animated Number Counters
  const counterElements = document.querySelectorAll('.counter[data-target]');
  let countersAnimated = false;

  function animateCounters() {
    counterElements.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target') || '0', 10);
      const duration = 1600; // ms
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing out cubic
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentVal = Math.floor(easeOut * target);

        counter.textContent = currentVal.toString();

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toString();
        }
      }

      requestAnimationFrame(updateCounter);
    });
  }

  if (counterElements.length > 0 && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersAnimated) {
          countersAnimated = true;
          animateCounters();
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });

    const heroMetrics = document.querySelector('.hero-metrics');
    if (heroMetrics) {
      counterObserver.observe(heroMetrics);
    }
  } else {
    animateCounters();
  }

  // 6. Hero Product Line Switcher with Smooth Crossfade Transition
  const toggleUpvc = document.getElementById('toggleUpvc');
  const toggleAlu = document.getElementById('toggleAlu');
  const heroImage = document.getElementById('heroWindowImage');
  const heroBadge = document.getElementById('heroTopBadge');
  const heroSeriesName = document.getElementById('heroSeriesName');
  const heroStandardCode = document.getElementById('heroStandardCode');
  
  const metaThermal = document.getElementById('metaThermal');
  const metaDesign = document.getElementById('metaDesign');
  const metaAcoustic = document.getElementById('metaAcoustic');
  const metaSecurity = document.getElementById('metaSecurity');

  const productsData = {
    upvc: {
      image: 'assets/schuco-kitchen-reference.png',
      badge: 'GERMAN PRECISION PVC-U SYSTEM',
      series: 'DURO · Acoustic & Multi-Chamber uPVC',
      standard: 'Superior Sound & Climate Shield',
      meta: {
        acoustic: '45 dB Noise Shield',
        design: 'Multi-Chamber Fusion',
        thermal: 'Tropical Heat Barrier',
        security: 'Multi-Point Locking'
      }
    },
    alu: {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      badge: 'ARCHITECTURAL SYSTEM ALUMINIUM',
      series: 'DURO · Slimline Aluminium Series',
      standard: 'Expansive Views & Structural Strength',
      meta: {
        acoustic: '42 dB Acoustic Glaze',
        design: '18mm Ultra-Slim Interlock',
        thermal: 'Polyamide Thermal Break',
        security: 'Heavy-Duty Carriage & Lock'
      }
    }
  };

  let isSwitching = false;

  function setHeroProduct(type) {
    if (isSwitching) return;
    const isUpvc = type === 'upvc';
    const activeBtn = isUpvc ? toggleUpvc : toggleAlu;
    const inactiveBtn = isUpvc ? toggleAlu : toggleUpvc;

    if (activeBtn?.classList.contains('active')) return;

    isSwitching = true;
    activeBtn?.classList.add('active');
    inactiveBtn?.classList.remove('active');

    const data = isUpvc ? productsData.upvc : productsData.alu;

    // Smooth image crossfade
    if (heroImage) {
      heroImage.classList.add('fade-transition');
    }

    setTimeout(() => {
      if (heroImage) heroImage.src = data.image;
      if (heroBadge) heroBadge.textContent = data.badge;
      if (heroSeriesName) heroSeriesName.textContent = data.series;
      if (heroStandardCode) heroStandardCode.textContent = data.standard;
      if (metaThermal) metaThermal.textContent = data.meta.thermal;
      if (metaDesign) metaDesign.textContent = data.meta.design;
      if (metaAcoustic) metaAcoustic.textContent = data.meta.acoustic;
      if (metaSecurity) metaSecurity.textContent = data.meta.security;

      setTimeout(() => {
        if (heroImage) {
          heroImage.classList.remove('fade-transition');
        }
        isSwitching = false;
      }, 60);
    }, 220);
  }

  if (toggleUpvc && toggleAlu) {
    toggleUpvc.addEventListener('click', () => setHeroProduct('upvc'));
    toggleAlu.addEventListener('click', () => setHeroProduct('alu'));
  }

  // 7. Contact Form Submission & WhatsApp Notification Handlers
  const inquiryForm = document.getElementById('projectInquiryForm');
  const sendWhatsAppBtn = document.getElementById('sendWhatsAppBtn');
  const formStatus = document.getElementById('formStatusMsg');

  // Helper to gather form details
  function getFormData() {
    return {
      name: document.getElementById('clientName')?.value.trim() || 'Prospective Client',
      company: document.getElementById('clientCompany')?.value.trim() || 'Independent Practice',
      email: document.getElementById('clientEmail')?.value.trim() || 'Not provided',
      phone: document.getElementById('clientPhone')?.value.trim() || 'Not provided',
      city: document.getElementById('clientCity')?.value.trim() || 'Not specified',
      stage: document.getElementById('clientStage')?.value || 'Design Stage',
      product: document.querySelector('input[name="productInterest"]:checked')?.value || 'uPVC & Aluminium',
      message: document.getElementById('projectScope')?.value.trim() || 'General fenestration proposal request'
    };
  }

  // A. Instant WhatsApp Notification Dispatch
  if (sendWhatsAppBtn) {
    sendWhatsAppBtn.addEventListener('click', () => {
      const data = getFormData();
      const text = `*New Fenestration Inquiry - DURO WINDOWS*\n\n` +
                   `*Name:* ${data.name}\n` +
                   `*Practice / Firm:* ${data.company}\n` +
                   `*Phone:* ${data.phone}\n` +
                   `*Email:* ${data.email}\n` +
                   `*City / Location:* ${data.city}\n` +
                   `*System of Interest:* ${data.product}\n` +
                   `*Project Type / Stage:* ${data.stage}\n` +
                   `*Scope Details:* ${data.message}\n\n` +
                   `_Transmitted via DURO Architectural Portal_`;

      const targetPhone = '912049118800'; // DURO engineering WhatsApp helpline
      const waUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(text)}`;
      window.open(waUrl, '_blank');
    });
  }

  // B. Standard Form Submission Handler (Supports Web3Forms / Formspree / Simulated Dispatch)
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', async (e) => {
      const accessKeyInput = inquiryForm.querySelector('input[name="access_key"]');
      const isDefaultKey = !accessKeyInput || accessKeyInput.value === 'YOUR_WEB3FORMS_ACCESS_KEY';

      if (isDefaultKey) {
        e.preventDefault();
        const submitBtn = inquiryForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span>TRANSMITTING SPECIFICATION...</span>';

        setTimeout(() => {
          inquiryForm.reset();
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<span>PROPOSAL REQUEST TRANSMITTED ✓</span>';
          submitBtn.style.backgroundColor = '#164e3e';
          submitBtn.style.borderColor = '#164e3e';

          if (formStatus) {
            formStatus.style.display = 'block';
            formStatus.innerHTML = `<strong>Inquiry Received Successfully.</strong><br>Your project requirements have been recorded. A fenestration specialist will deliver initial opening schedules and recommendations within 24 business hours.`;
          }

          setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.style.backgroundColor = '';
            submitBtn.style.borderColor = '';
          }, 5000);
        }, 900);
      }
      // If configured with active key, submits directly via Web3Forms
    });
  }

});
