# Mumtaz Ali Portfolio — Functional & Technical Feature Specification

**Document:** Portfolio Feature Specification  
**Version:** 1.0  
**Date:** 8 October 2026  
**Prepared by:** Mumtaz Ali  
**Audience:** Recruiters, clients, developers, QA reviewers  
**Classification:** Public — for portfolio review and technical reference

---

## 1. Executive Summary

The **Mumtaz Ali Portfolio** is a modern, responsive single-page application (SPA) that showcases Mumtaz Ali's work as a **Full-Stack AI/ML Developer** based in Lahore, Pakistan. The portfolio is designed to serve three audiences:

- **Recruiters & hiring managers** — quickly understand skills, experience, and shipped work
- **Potential freelance clients** — see service offerings, pricing, and initiate a project
- **Peer developers** — explore technical stack, code quality, and project architecture

The platform is a **100% client-side React application** — there is no custom backend. All contact-form submissions are routed through **EmailJS**, a third-party email delivery service, and the site is deployed on **Vercel** with automatic builds from GitHub.

The site is intentionally lightweight, has zero server costs, and deploys in under two minutes on every push.

---

## 2. About This Document

### 2.1 Purpose and Audience

This document is the functional and technical specification for the portfolio website. It is written for:

- **Recruiters / clients** — to see full scope and what each page delivers
- **QA / reviewers** — to verify expected behavior
- **Future developers** — as a map of components, styling system, and data flow
- **Mumtaz Ali** — as a maintenance and upgrade reference

### 2.2 Scope

The document covers the single front-end code base:

| Component | Repository | Technology |
|---|---|---|
| Front-end | `engrmumtazali0112/my_portfolio` | React 18 (CRA), React Router v6, CSS Modules, React Icons, EmailJS |

### 2.3 How to Read Each Module

Every module in **Section 5** follows a consistent layout:

- **Summary table** — who uses it, route path, files, status
- **What the user sees** — screens, interactions, states
- **Business rules & behavior** — validation, gating, side effects
- **How it works together** — data flow and cross-component interactions

### 2.4 Status Definitions

| Status | Meaning |
|---|---|
| **Live** | Fully built and deployed to production |
| **Live (partial)** | Core works; some features pending |
| **UI ready, backend pending** | Screen built; awaiting API |

### 2.5 Glossary

| Term | Definition |
|---|---|
| **SPA** | Single-Page Application — one HTML shell, client-side routing |
| **CRA** | Create React App — the build tool and dev server |
| **Route** | A page-level React component mapped to a URL path |
| **Component** | Reusable UI building block in `src/Components/` |
| **Hero** | Top-of-page section with headline, tagline, and CTA |
| **CTA** | Call to action (e.g., "View Projects", "Get in Touch") |
| **EmailJS** | Third-party client-side service for sending emails from a static site |
| **Vercel** | Hosting platform with GitHub integration and automatic deploys |

---

## 3. System Architecture

### 3.1 Overview

The portfolio is a **single React application**. There are no servers, databases, or third-party backends to maintain. Every interaction is either:

1. **Client-side** — routing, animations, form validation, cart-less state
2. **EmailJS API** — only when the contact form is submitted
User Browser
│
├── React SPA (React Router)
│ ├── / → Home (Hero + Bio + Work + Services + Reviews + Footer)
│ ├── /about → About page (profile card + long-form bio)
│ ├── /services → Services grid (9 offerings)
│ ├── /project → Project showcase + pricing cards
│ ├── /education → Academic record + certifications
│ ├── /review → Client reviews carousel
│ └── /contact → Contact form (EmailJS)
│
└── External Services
├── EmailJS (form → email)
└── Vercel (hosting + CDN + SSL)

| Layer | Component | Responsibility |
|---|---|---|
| Presentation | React 18 SPA | Renders pages, handles routing, animations, form UX |
| Presentation | CSS Modules | Scoped styling per component (no global leaks) |
| Presentation | React Icons | Vector icon set (Font Awesome pack) |
| Integration | EmailJS | Delivers contact-form messages to Gmail inbox |
| Hosting | Vercel | Serves `/build` output, CDN, SSL, git-triggered deploys |
| Repository | GitHub | Version control, `main` branch auto-deploys to Vercel |

### 3.2 How the Applications Communicate

Since there's only one application, "communication" is between components:

- **Navbar** is mounted per-route and manages the mobile drawer + scroll state.
- **Routes** under `src/Routes/` wrap each page with shared layout (`Navbar` + content + `Footer`).
- **Components** in `src/Components/` are consumed by Routes.
- **Data** lives in `src/Components/WorkCardData.js` (project list) and `src/data/profileData.js` (profile facts) — imported directly, no API calls.
- **EmailJS** is initialized in `public/index.html` with the public key, then invoked from `src/Components/Form.js`.

### 3.3 Environments and Runtime

| Item | Detail |
|---|---|
| Dev server | `npm start` → port 3000 |
| Production build | `npm run build` → `/build` directory |
| Static host | Vercel (production on `main`) |
| Node version | ≥ 14 (tested on Node 18) |
| Env vars | None required (EmailJS keys are public, hard-coded in `Form.js`) |
| Automated tests | Not configured (manual testing + Lighthouse) |

---

## 4. Users, Roles and Access

The portfolio has no authentication, no user accounts, and no protected routes. All pages are public.

### 4.1 Types of Users

| User type | Can do |
|---|---|
| **Visitor** | Browse all pages, read content, view projects, download CV (if enabled), send contact form |
| **Recruiter** | Same as visitor, focused on About + Projects + Experience |
| **Client** | Same as visitor, focused on Services + Pricing + Contact |
| **Developer** | Same as visitor, inspects source on GitHub |

### 4.2 Access Control

There is **no access control**. Every route is public. If authentication is added later (e.g., an admin panel to edit content), it will be implemented as a separate module and documented under Section 5.

---

## 5. Module Specifications

### 5.1 Home Page

**Summary**

| Used by | Route | Files | Status |
|---|---|---|---|
| All visitors | `/` and `/home` | `src/Routes/Home.js` + Hero + Bio + Work + Services + Reviews + Footer | Live |

**What the user sees**

1. **Navbar** — fixed top, white, transparent → white-on-scroll, with logo, 5 nav links, and a "Contact" CTA pill.
2. **Hero section** — badge ("Available for freelance"), headline introducing Mumtaz Ali, bio paragraph, two CTAs (View Projects, Get in Touch), social icons, and a floating profile image with two stat cards ("2+ Years", "20+ Projects").
3. **Bio section** — light gray band with a two-column layout: left = section title, right = two short bio paragraphs + a "Read my full story" link. Below is a 4-column stats strip.
4. **Work section** — a 3-column grid of project cards. Each card: image, title, description, View + Source buttons.
5. **Services section** — a 3×3 grid of 9 service cards (Web Apps, Mobile, AI/ML, Data, Database, API, E-commerce, SaaS, Performance).
6. **Pricing cards** — Basic / Standard / Premium tiers with $100 / $150 / Custom pricing.
7. **Reviews section** — 3-card carousel with client quotes, ratings, avatars.
8. **Footer** — 3-column: brand + navigation + services + contact, social icons row, copyright, "Available for freelance" badge.

**Business rules**

- Hero stat cards animate (`@keyframes float`) and drift ±8px vertically over 6s.
- The scroll listener in Navbar adds `header-scrolled` class when `window.scrollY > 8`.
- All sections are fully responsive — tested at 320px, 768px, 1024px, and 1440px widths.

---

### 5.2 About Page

**Summary**

| Used by | Route | Files | Status |
|---|---|---|---|
| All visitors | `/about` | `src/Routes/About.js` + `AboutContent.js` + `AboutContentStyles.css` | Live |

**What the user sees**

- Two-column layout: **sticky profile card** on the left, long-form content on the right.
- Profile card: circular image with two animated rings, "Employed at Wonder Crafts" badge, name, title, subtitle, 4 stat tiles (Experience, Clients, Projects, Certifications), and a "Let's Connect" button.
- Right side: section badge, headline ("Building Scalable AI & Web Solutions"), and 6 content blocks:
  - Professional Journey
  - Technical Excellence
  - Modern Development & DevOps
  - Notable Projects & Experience
  - Education & Certifications
  - Vision & Passion
- Bottom: "Core Competencies" tag cloud (8 pills).

**Business rules**

- Profile card uses `position: sticky; top: 110px` on desktop, static on mobile.
- Content blocks fade in via `.fade-in` class toggled on mount (`useEffect` → `setIsVisible(true)`).
- Rings use `@keyframes pulse` with 3s infinite loop.

---

### 5.3 Services Page

**Summary**

| Used by | Route | Files | Status |
|---|---|---|---|
| All visitors | `/services` | `src/Routes/Service.js` + `ServicesSection.js` + `ServicesSectionStyles.css` | Live |

**What the user sees**

- 9 service cards in a 3×3 grid, each with:
  - Numeric ID (`01`–`09`) in monospace
  - "run" tag
  - Title
  - Description
  - Tech stack pills (e.g., `Django`, `FastAPI`, `React.js`)

**Service categories**

| # | Service | Stack |
|---|---|---|
| 01 | Web Applications | Django, FastAPI, React.js |
| 02 | Mobile Applications | Flutter, Firebase, Android |
| 03 | AI / ML Solutions | PyTorch, OpenCV, LangChain |
| 04 | Data Analytics & BI | Pandas, Power BI, Tableau |
| 05 | Database Design | PostgreSQL, MongoDB, MySQL |
| 06 | API Integration | REST, GraphQL, Webhooks |
| 07 | E-Commerce Systems | Stripe, Cart Logic, Order Tracking |
| 08 | SaaS & Cloud Deployment | Docker, AWS, CI/CD |
| 09 | Performance Optimization | Caching, CDN, DB Tuning |

**Business rules**

- Card hover: `translateY(-4px)` + border turns blue + shadow grows.
- Grid collapses to 2 columns at ≤1024px, 1 column at ≤640px.

---

### 5.4 Projects Page

**Summary**

| Used by | Route | Files | Status |
|---|---|---|---|
| All visitors | `/project` | `src/Routes/Project.js` + `Work.js` + `WorkCard.js` + `WorkCardData.js` + `PricingCards.js` | Live |

**What the user sees**

- Header: "PROJECTS." with subtitle.
- **Project grid** — 3 columns of cards, each with:
  - Image (16:10 aspect, `object-fit: cover`)
  - Title
  - Description (2-4 lines)
  - Two buttons: **View** (dark pill) and **Source** (outline pill, links to GitHub)
- **Pricing cards** — 3 tiers (Basic $100 / Standard $150 / Premium Custom) with feature lists and "Purchase Now" CTAs.

**Projects included**

Jewelry Shop Management, Axon Forge Agency Platform, Cloud BookStore with AWS, Interactive Quiz Game, Student Complaint Management System, Amazon Scraper, FinanceAI, AI Visibility Platform, Flask CI/CD Demo, Fingerprint Attendance System, Hand Gesture Recognition, Real-Time Object Detection, Personality Prediction System, Smart Hostel Management System, Robust Multiple-Choice Quiz Game, Hangman Adventure Django, World Bank Distribution Visualization, Titanic Survival Prediction, Watch World E-commerce, StudyBud, Document Plagiarism Detector, Voice Assistant — **22 projects total**.

**Business rules**

- Cards use `!important` on background and text colors to guarantee white theme.
- Grid collapses to 2 columns at ≤1024px, 1 column at ≤740px.
- "Source" buttons open GitHub repos in a new tab.

---

### 5.5 Education / Experience Page

**Summary**

| Used by | Route | Files | Status |
|---|---|---|---|
| All visitors | `/education` | `src/Routes/Education.js` + `Education.js` + `EducationStyles.css` | Live |

**What the user sees**

A "git commit"-style academic record:

1. **Header** — `$ cat education.log` eyebrow + title + subtitle
2. **Degree panel** — `// degree` label + primary commit card:
   - Hash `a1b2c3d`
   - Period `2021 — 2025`
   - Title: "BS Computer Software Engineering"
   - School: "University of Engineering & Technology, Mardan"
   - CGPA progress bar (3.42 / 4.0)
3. **Pre-university panel** — `// pre-university` label + two commit cards:
   - FSc Pre-Engineering, Govt. Post Graduate College, Mardan, 2021, 718/1100
   - Matriculation (Science), Govt. Higher Secondary School, Mian Khan, Mardan, 2019, 912/1100
4. **Certifications panel** — `// ls certifications/` label + file list of 7 items:
   - wonder-crafts-appreciation.cert
   - virevo-srl-appreciation.cert
   - axaura-tech-achievement.cert
   - pythonwebdevpro.cert
   - iu-programming-challenge.cert
   - ecodecamp-python-dev.cert
   - den-coding-cup.cert (ID: DENP1942)

**Business rules**

- Commit cards get a blue left border on hover (`translateX(3px)`).
- Metric bars use `linear-gradient(90deg, #2563eb, #60a5fa)`.
- The whole section renders in **white theme** with a grid overlay pattern removed.

---

### 5.6 Reviews Page

**Summary**

| Used by | Route | Files | Status |
|---|---|---|---|
| All visitors | `/review` | `src/Routes/Review.js` + `ReviewsSection.js` + `ReviewsSectionStyles.css` | Live |

**What the user sees**

- Title pill "CLIENT REVIEWS" (white bg, uppercase).
- Subtitle: "What our clients say about our work".
- **3-card carousel** — shows 3 reviews at a time; middle card is enlarged (scale 1.03) with a blue-tinted border.
- Each card: quote mark, italic comment, rating badge (e.g., 4.9/5 ★), divider, avatar + name + role + company.
- Prev/Next circular buttons on the sides.
- Dots navigation below; active dot grows to a 28px pill.

**Reviews data**

| Name | Role | Company | Rating |
|---|---|---|---|
| Jane Smith | CEO & Founder | TechVision Solutions | 4.9 |
| Michael Johnson | CTO | Digital Dynamics Corp | 4.8 |
| Emily Brown | Product Manager | Innovation Hub Inc | 4.9 |
| David Wilson | Engineering Director | NextGen Technologies | 4.7 |

**Business rules**

- Carousel state (`currentIndex`) advances modulo reviews.length.
- `getVisibleReviews()` returns 3 consecutive reviews starting at `currentIndex`.
- On mobile (≤1024px) cards stack vertically and scale resets to 1.

---

### 5.7 Contact Page

**Summary**

| Used by | Route | Files | Status |
|---|---|---|---|
| All visitors | `/contact` | `src/Routes/Contact.js` + `Form.js` + `FormStyles.css` | Live (EmailJS integration) |

**What the user sees**

- Centered white card (`max-width: 700px`) with subtle shadow.
- Header: `// contact` eyebrow + "Get in touch." + subtitle.
- Form fields:
  - **Full Name** (required)
  - **Email Address** (required, validated)
  - **Subject** (required)
  - **Message** (textarea, required)
- Submit button: dark pill that turns indigo on hover.
- On success: card swaps to a green checkmark + "Message sent." + user's name echoed back + "Send another message" reset button.

**Business rules**

- Validation runs on submit:
  - Name: not empty
  - Email: matches `/^\S+@\S+\.\S+$/`
  - Subject: not empty
  - Message: not empty
- EmailJS uses hardcoded service/template/public keys:
  - Service: `21dmbcs124`
  - Template: `template_9pkkqa9`
  - Public key: `gP5gF9RPdQC3gvB-c`
- **Fallback behavior:** Even if EmailJS fails (rate-limited, offline), the form shows the success screen. This is intentional — the user should never see a failure on a portfolio contact form.
- Form state is cleared after submission regardless of success/failure.

---

### 5.8 Navbar (Shared Component)

**Summary**

| Used by | Files | Status |
|---|---|---|
| All routes | `src/Components/Navbar.js` + `NavbarStyle.css` | Live |

**What the user sees**

- Fixed top bar, height 76px.
- Left: logo image + "Mumtaz Ali" + "Full Stack Developer" tagline.
- Center: 5 nav links (Home, About, Services, Projects, Experience).
- Right: "Contact" CTA pill (indigo).
- On scroll (≥8px): shadow appears under navbar.
- On mobile (≤900px): hamburger button opens a right-side drawer with the same links.

**Active-link logic**

- Home: matches `/` or `/home`
- Other routes: `location.pathname.startsWith(path)` — so `/project/123` would highlight "Projects"

**Business rules**

- Clicking a nav link closes the mobile drawer.
- Overlay behind the drawer dims the page and closes the drawer on click.
- Active link shows an underline (`::after` pseudo-element).

---

### 5.9 Footer (Shared Component)

**Summary**

| Used by | Files | Status |
|---|---|---|
| All routes | `src/Components/Footer.js` + `FooterStyles.css` | Live |

**What the user sees**

- White background with a top border.
- **Top grid (2 columns)**:
  - Left: brand mark "MA" + name + tagline + location
  - Right: 3 columns of links
    - Navigate: Home, About, Services, Projects, Experience, Contact
    - Services: Web Applications, AI/ML Solutions, API Integration, Cloud Deployment
    - Get in Touch: email, phone, location
- **Social section**: "Connect" label + 7 icon links (GitHub, LinkedIn, Twitter, Instagram, Facebook, YouTube, Discord).
- **Bottom bar**: "© 2026 Mumtaz Ali. All rights reserved." + "Available for freelance" badge with green dot.

**Business rules**

- Copyright year is dynamic (`new Date().getFullYear()`).
- Social links open in new tab with `rel="noopener noreferrer"`.
- Grid collapses to 2 columns at ≤900px, 1 column at ≤640px.

---

## 6. End-to-End Workflows

### 6.1 Recruiter Reviews Portfolio

1. Recruiter lands on `/` from LinkedIn or Google.
2. Sees Hero with headline + tagline + CTA "View Projects".
3. Scrolls through Bio, Work, Services, Reviews, Footer.
4. Clicks "View Projects" → routed to `/project`.
5. Opens a project card's "View" link → external demo or GitHub.
6. Returns, clicks "About" → reads full profile.
7. Clicks "Contact" CTA → sends a message via the form.
8. EmailJS delivers the message to `engrmumtazali01@gmail.com`.

### 6.2 Client Submits Project Enquiry

1. Client visits the site from a Google search.
2. Reads Services section on `/` or `/services`.
3. Clicks "Purchase Now" on the Standard tier → routed to `/contact`.
4. Fills out name, email, subject, message.
5. Submits → success screen shown.
6. EmailJS delivers to inbox within seconds.
7. Mumtaz replies within 24 hours.

### 6.3 Developer Explores Source

1. Developer clicks "Source" on a project card → GitHub opens.
2. Or clicks GitHub icon in Footer → profile.
3. Clones `engrmumtazali0112/my_portfolio`.
4. Runs `npm install && npm start`.
5. Reads `DOCUMENTATION.md` for architecture overview.

---

## 7. Data Model Reference

There is no database. All data is in static JavaScript objects.

### 7.1 Entities

| Entity (file) | Purpose | Key fields |
|---|---|---|
| **WorkCardData** (`src/Components/WorkCardData.js`) | Project list | `imgsrc`, `title`, `text`, `view`, `source` |
| **profileData** (`src/data/profileData.js`) | Profile facts | `name`, `title`, `email`, `phone`, `location`, `skills`, `experience`, `education`, `achievements`, `certifications` |
| **ServicesSection.services** (`src/Components/ServicesSection.js`) | Service catalog | `id`, `title`, `description`, `stack` |
| **ReviewsSection.reviews** (`src/Components/ReviewsSection.js`) | Client testimonials | `name`, `role`, `company`, `rating`, `comment`, `image` |
| **PricingCards** (`src/Components/PricingCards.js`) | Pricing tiers | `title`, `price`, `features[]`, `cta` |
| **Navbar.navItems** (`src/Components/Navbar.js`) | Navigation | `path`, `label` |

### 7.2 Key Relationships

- A **Project** has one image and two URLs (view, source).
- A **Service** has many stack tags.
- A **Review** has one image, one rating, one comment.
- A **Pricing tier** has many feature bullets.
- No entity references another — everything is flat and stateless.

---

## 8. Styling System

### 8.1 Design Tokens (from `LightTheme.css` and individual CSS files)

| Token | Value | Usage |
|---|---|---|
| Background | `#ffffff` | Page base |
| Surface | `#f8fafc` / `#f8f9fb` | Bio, reviews sections |
| Border | `#e5e7eb` | Card and input borders |
| Text primary | `#0f172a` | Headlines, body |
| Text muted | `#475569` | Paragraphs |
| Text soft | `#64748b` | Sub-labels |
| Accent | `#4f46e5` / `#2563eb` | CTAs, links, active states |
| Accent soft | `#eef2ff` / `#eff6ff` | Badges, pills |
| Success | `#22c55e` | Available dot |
| Danger | `#ef4444` | Form errors |

### 8.2 Typography

- Primary: **Outfit** (300–800) via Google Fonts
- Monospace: **JetBrains Mono** (eyebrows, code-style labels)
- Fallback: system stack (`-apple-system`, `BlinkMacSystemFont`, `sans-serif`)

### 8.3 Spacing & Radius

- Base radius: `8px` (inputs, small chips)
- Card radius: `14px–20px`
- Pill radius: `999px`
- Section padding: `90px 24px` (desktop), `60px 18px` (mobile)

### 8.4 Responsive Breakpoints

| Breakpoint | Behavior |
|---|---|
| ≤ 960px | Hero stacks; grids drop to 2 columns |
| ≤ 900px | Navbar collapses to hamburger |
| ≤ 740px | Project grid → 1 column |
| ≤ 640px | Forms → 1 column, section padding reduced |
| ≤ 480px | Hero font sizes reduced, buttons shrink |

---

## 9. Integrations

### 9.1 EmailJS

- **Purpose:** Contact form → email delivery
- **Mode:** Client-side (public key in `public/index.html`)
- **Config file:** `src/Components/Form.js`
- **Failure handling:** Shows success screen anyway; user never sees an error

### 9.2 Vercel

- **Purpose:** Hosting, CDN, SSL, auto-deploy
- **Trigger:** Every push to `main`
- **Build:** `npm run build` → `/build`
- **Output:** SPA with `index.html` fallback for client-side routes

### 9.3 Google Fonts

- **Purpose:** Outfit + JetBrains Mono
- **Loaded from:** `@import` in `NavbarStyle.css` and inline `<link>` tags

### 9.4 No Other Integrations

No Stripe, no Analytics, no CMS, no backend APIs. Keeps the site fast and cost-free.

---

## 10. Security & Reliability

### 10.1 Security Controls

| Area | Control |
|---|---|
| **Contact form** | Client-side validation + EmailJS public key (rate-limited by EmailJS) |
| **HTTPS** | Provided by Vercel |
| **Environment** | No secrets in code — EmailJS public key is intentionally public |
| **Content Security** | No user-generated content rendered as HTML |
| **Dependencies** | `npm audit` clean (0 vulnerabilities at time of writing) |

### 10.2 Reliability

- **Static site** — no runtime failures possible
- **CDN** — Vercel edge network delivers assets globally
- **Fallback form** — success screen shows even if EmailJS fails
- **No database** — nothing to corrupt or back up

### 10.3 Error Handling

- **404s** — React Router has no catch-all; unknown routes render an empty page. (Can be improved with a `/NotFound` route.)
- **Broken images** — no fallback; images should always exist in `src/assets/`
- **EmailJS failure** — silently swallowed; success screen shown

---

## 11. Configuration

No environment variables required. All configuration is:

| Setting | Where | Value |
|---|---|---|
| Site title | `public/index.html` `<title>` | "Mumtaz Ali \| Portfolio" |
| Favicon | `public/favicon.ico` | Default CRA favicon |
| Manifest | `public/manifest.json` | PWA manifest (default CRA) |
| EmailJS keys | `src/Components/Form.js` | Service ID, Template ID, Public Key |
| Fonts | `src/Components/NavbarStyle.css` | Google Fonts import |

---

## 12. Implementation Status

| Module | Status | Notes |
|---|---|---|
| Home page | Live | Full white theme, all sections rendering |
| About page | Live | Sticky profile card + 6 content blocks |
| Services page | Live | 9 service cards |
| Projects page | Live | 22 projects + pricing tiers |
| Education page | Live | Git-style commit layout |
| Reviews page | Live | 3-card carousel |
| Contact page | Live | EmailJS integration |
| Navbar | Live | Fixed header, mobile drawer |
| Footer | Live | 3-column layout, social row |
| Light theme | Live | Forced white theme across all pages |
| CV download | Removed | Previously available; can be re-added |
| Certificates page | Removed | Component deleted; certs now listed inside Education page |
| Analytics | Not started | Could add Vercel Analytics |
| Blog / Insights | Not started | Could add MDX-based posts |
| Admin panel | Not started | Not needed for portfolio |
| Custom domain | Not started | Currently on `*.vercel.app` |

---

## 13. Future Roadmap (Suggested)

| Priority | Item | Effort |
|---|---|---|
| High | Custom domain (e.g., `mumtazali.dev`) | 30 min + DNS |
| High | Add Open Graph meta tags + social preview image | 30 min |
| High | Add Vercel Analytics for visitor counts | 15 min |
| Medium | Add a 404 page | 20 min |
| Medium | Add a blog / insights section | 4–6 hrs |
| Medium | Dark mode toggle | 2 hrs |
| Low | Multi-language support (English / Urdu) | 8+ hrs |
| Low | Admin CMS for editing projects | 12+ hrs |

---

## Document Control

**Version 1.0 — 8 October 2026.**  
Prepared by Mumtaz Ali.  
Reflects the `my_portfolio` code base as of the date above.  
Update whenever a module's scope or status changes.
