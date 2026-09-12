# Codeine — Responsive Creative Designer Portfolio Website

A luxury, fully responsive portfolio website for **Codeine**, built from scratch using **React.js, Mobile-First CSS, CSS Variables, EmailJS integration, Custom Cursor mechanics, and Smooth Scroll animations**.

---

## ✨ Features & Architecture

- **Semantic HTML & Modern React**:
  - Modular, component-driven architecture (`Header`, `Home`, `About`, `Skills`, `Services`, `Work`, `Contact`, `Footer`, `ScrollUp`, `CustomCursor`).
- **Mobile First Responsive Methodology**:
  - Base CSS engineered for mobile screens first (`< 576px`), progressively scaling up across breakpoints (`576px`, `768px`, `1024px`, `1150px`).
- **CSS Custom Variables**:
  - Consistent design tokens for colors, fluid typography (Syne & Poppins), spacing, and elevation.
- **EmailJS Contact Integration**:
  - Seamless form submission without page reload.
  - Automatic success feedback (`Message sent successfully ✅`) with celebratory confetti.
  - Automatic error handling (`Message not sent (service error) ❌`).
  - Auto-clearing fields and 5-second message auto-dismissal.
  - Sample test mode enabled by default; easily configurable with real EmailJS keys via `.env`.
- **Google Maps Integration**:
  - Responsive embedded location map (`<!-- Insert your location in Google Maps -->`).
- **Interactive Custom Cursor**:
  - Tracks mouse coordinates (`X`, `Y`) and centers the pointer.
  - Automatically hides when hovering interactive links and buttons.
  - Gracefully switches off on touch-based / mobile devices (`pointer: coarse`).
- **Smooth Navigation & ScrollSpy**:
  - Fixed blur header with active link indicators that update as you scroll.
  - Mobile drawer menu with smooth open/close animations.
  - Floating Scroll-to-top button.
- **Filterable Portfolio & Service Modals**:
  - Filter projects by UI/UX Design, Brand Identity, and Web Development.
  - In-depth modal popups detailing deliverables for each service offering.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

The portfolio will be available at `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```

---

## 📧 EmailJS Setup (Optional)
To link your live EmailJS account:
1. Sign up at [EmailJS](https://www.emailjs.com/).
2. Create an Email Service (e.g. Gmail).
3. Create an Email Template with:
   - **Subject**: `New message from {{user_name}}`
   - **Content**:
     ```
     Names: {{user_name}}
     Email: {{user_email}}
     Message: {{user_message}}

     Best wishes,
     EmailJS team
     ```
4. Copy your credentials into a `.env` file:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

---

## 🎨 Credits & Attribution
- Design inspiration & structure based on Bedimcode's Codeine portfolio concept.
- Copyright: `© All Rights Reserved By Bedimcode`.
