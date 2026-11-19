# DURO WINDOWS & DOORS

> Architectural fenestration systems combining German engineering standards with classic design. Specializing in **Precision uPVC Window Systems** and **Architectural System Aluminium Windows**.

---

## Overview

A responsive, high-performance website designed for **DURO WINDOWS AND DOORS**. Built with a classic architectural aesthetic (inspired by European fenestration manufacturers like Schüco and Reynaers), featuring an emerald and forest green color scheme (`#289643`, `#0f382c`, `#11161d`), clean typography (**Playfair Display** + **Inter**), and authentic architectural photography.

---

## Key Features

- **Interactive Product Switcher**: Dynamically toggle between *German-profile uPVC* and *System Aluminium* in the hero section with smooth crossfade animations, updating live architectural imagery, performance badges, and living comfort metrics.
- **Scope of Work & Turnkey Delivery Suite**:
  - **5-Stage Turnkey Process**: Consultation & Aperture Survey → Bespoke CAD/BIM Detailing → Precision German Fabrication → Certified On-Site Master Installation → Quality Handover & Lifetime Care.
  - **System Typologies Showcase**: Minimalist Sliding & Lift-and-Slide Patio Doors, Dual-Action Tilt & Turn Casement Windows, Fixed Architectural Glass Walls, and Grand Pivot Doors.
- **Dedicated 2-Product Architecture**:
  - **DURO Precision uPVC Systems**: Multi-chamber acoustic and thermal core, up to 45 dB noise insulation, 100% non-corrosive, tropical UV stability.
  - **DURO System Aluminium Windows**: 18mm ultra-slim interlocks, polyamide thermal breaks, up to 4.5m panel heights, 400kg sash capacity, and certified wind resistance.
- **Architectural Comparison Matrix**: Clear side-by-side guide highlighting aesthetics, acoustics, thermal comfort, aperture spans, and ideal project applications.
- **Professional Animation System**:
  - Smooth scroll-triggered reveal animations via `IntersectionObserver` with editorial stagger delays.
  - Animated number counters for key performance metrics.
  - Sticky glassmorphic header with scroll elevation.
  - Micro-interactions: card hover lifts, image zoom dynamics, and pulsing floating WhatsApp action.
- **Consultation & Proposal Suite**:
  - Directly integrated contact channels (Direct line, WhatsApp helpdesk, engineering studio coordinates).
  - Clean two-column quotation form with refined project type/stage selectors and scope notes.
  - **Instant WhatsApp Dispatch**: Form inputs format automatically into an instant WhatsApp message sent directly to your phone.
  - **Web3Forms Pre-Configured**: Zero-backend form processing for static hosting (receives submissions directly in your email inbox).
- **Fully Responsive Architecture**: Custom-engineered breakpoints for mobile phones (360px+), tablets (768px – 1080px), and wide desktop displays. Includes a slide-out mobile drawer menu.

---

## Project Structure

```
duro-windows/
├── index.html       # Semantic HTML5 architecture & structured sections
├── styles.css       # Custom responsive CSS design system & typography
├── script.js        # Product toggles, mobile drawer, & form dispatch handlers
├── assets/          # Real architectural photography & references
│   └── schuco-kitchen-reference.png
└── README.md
```

---

## Local Development

You can run this project with any local HTTP server:

```bash
# Python 3
python -m http.server 8085

# Node.js
npx serve .
```

Open `http://localhost:8085/` in your browser.

---

## Static Form Notification Setup

To receive email notifications from the consultation form without running a backend server:
1. Visit [web3forms.com](https://web3forms.com) and create a free access key.
2. In `index.html`, update the hidden input field:
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACTUAL_ACCESS_KEY">
   ```
3. Submissions will be delivered directly to your email address.

---

## License

© 2026 DURO WINDOWS & DOORS. All rights reserved.
