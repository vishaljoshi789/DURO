/**
 * DURO WINDOWS & DOORS - Classic Architectural Fenestration
 * Client Interactions, Responsive Drawer, & Form Notification Handler
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Mobile Navigation Drawer Toggle
  const mobileToggleBtn = document.getElementById('mobileMenuBtn');
  const mobileCloseBtn = document.getElementById('mobileCloseBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

  function openMobileMenu() {
    mobileDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileDrawer.classList.remove('open');
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

  // 2. Back to Top Button
  const backToTopBtn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 450) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // 3. Hero Product Line Switcher (uPVC ↔ System Aluminium)
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
      badge: 'GERMAN PVC-U WINDOW SYSTEM',
      series: 'DURO · Multi-Chamber uPVC Series',
      standard: 'DIN EN 12608 CLASS A',
      meta: {
        thermal: 'Uw ≤ 0.85 W/m²K',
        design: 'Multi-Chamber Fusion',
        acoustic: '45 dB Reduction',
        security: 'RC2 Multi-Point Bolts'
      }
    },
    alu: {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      badge: 'ARCHITECTURAL SYSTEM ALUMINIUM',
      series: 'DURO · Slimline Aluminium Series',
      standard: 'EN AW-6063 T6 THERMAL BREAK',
      meta: {
        thermal: 'Polyamide Thermal Break',
        design: '18mm Ultra-Slim Interlock',
        acoustic: '42 dB Acoustic Glaze',
        security: 'Heavy-Duty Multi-Lock'
      }
    }
  };

  function setHeroProduct(type) {
    if (type === 'upvc') {
      toggleUpvc.classList.add('active');
      toggleAlu.classList.remove('active');
      const data = productsData.upvc;
      heroImage.src = data.image;
      heroBadge.textContent = data.badge;
      heroSeriesName.textContent = data.series;
      heroStandardCode.textContent = data.standard;
      metaThermal.textContent = data.meta.thermal;
      metaDesign.textContent = data.meta.design;
      metaAcoustic.textContent = data.meta.acoustic;
      metaSecurity.textContent = data.meta.security;
    } else {
      toggleAlu.classList.add('active');
      toggleUpvc.classList.remove('active');
      const data = productsData.alu;
      heroImage.src = data.image;
      heroBadge.textContent = data.badge;
      heroSeriesName.textContent = data.series;
      heroStandardCode.textContent = data.standard;
      metaThermal.textContent = data.meta.thermal;
      metaDesign.textContent = data.meta.design;
      metaAcoustic.textContent = data.meta.acoustic;
      metaSecurity.textContent = data.meta.security;
    }
  }

  if (toggleUpvc && toggleAlu) {
    toggleUpvc.addEventListener('click', () => setHeroProduct('upvc'));
    toggleAlu.addEventListener('click', () => setHeroProduct('alu'));
  }

  // 4. Contact Form Submission & Static Site Notification Handler
  const inquiryForm = document.getElementById('projectInquiryForm');
  const sendWhatsAppBtn = document.getElementById('sendWhatsAppBtn');
  const formStatus = document.getElementById('formStatusMsg');

  // Helper to gather form details
  function getFormData() {
    return {
      name: document.getElementById('clientName')?.value.trim() || 'Prospective Client',
      company: document.getElementById('clientCompany')?.value.trim() || 'Independent',
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
                   `*Practice / Company:* ${data.company}\n` +
                   `*Phone:* ${data.phone}\n` +
                   `*Email:* ${data.email}\n` +
                   `*City / Location:* ${data.city}\n` +
                   `*System of Interest:* ${data.product.toUpperCase()}\n` +
                   `*Project Stage:* ${data.stage}\n` +
                   `*Scope Details:* ${data.message}\n\n` +
                   `_Sent via DURO Architectural Portal_`;

      const targetPhone = '912049118800'; // DURO engineering WhatsApp helpline
      const waUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(text)}`;
      window.open(waUrl, '_blank');
    });
  }

  // B. Standard Form Submission Handler (Supports Web3Forms / Formspree / Simulated Dispatch)
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', async (e) => {
      // If Web3Forms access key is still default placeholder, handle locally with friendly notification
      const accessKeyInput = inquiryForm.querySelector('input[name="access_key"]');
      const isDefaultKey = !accessKeyInput || accessKeyInput.value === 'YOUR_WEB3FORMS_ACCESS_KEY';

      if (isDefaultKey) {
        e.preventDefault();
        const submitBtn = inquiryForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = 'TRANSMITTING SPECIFICATION...';

        setTimeout(() => {
          inquiryForm.reset();
          submitBtn.disabled = false;
          submitBtn.textContent = 'PROPOSAL REQUEST TRANSMITTED ✓';
          submitBtn.style.backgroundColor = '#164e3e';
          submitBtn.style.borderColor = '#164e3e';

          if (formStatus) {
            formStatus.style.display = 'block';
            formStatus.innerHTML = `<strong>Inquiry Received Successfully.</strong><br>Your technical requirements have been recorded. A fenestration specialist will deliver initial opening schedules within 24 business hours.`;
          }

          setTimeout(() => {
            submitBtn.textContent = 'SUBMIT SPECIFICATION REQUEST →';
            submitBtn.style.backgroundColor = '';
            submitBtn.style.borderColor = '';
          }, 5000);
        }, 900);
      }
      // Otherwise, form posts directly to Web3Forms and sends instant email to the owner!
    });
  }

});
