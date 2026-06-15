# 🧭 Apex — Responsive Navigation Bar

> A super aesthetic, clean, refreshing, and buttery-smooth responsive navigation bar built with pure **HTML + CSS + JavaScript**. Features glassmorphism on scroll, animated hamburger toggle, full-screen mobile overlay with staggered animations, and active section highlighting.

[![Live Demo](https://img.shields.io/badge/Live-Demo-6366f1?style=for-the-badge&logo=github)](https://github.com)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🎬 Demo / Preview

▶️ **Watch the project walkthrough here:**

[![Apex Nav Demo](https://img.youtube.com/vi/Y0IpfZsI0I8/maxresdefault.jpg)](https://www.youtube.com/watch?v=Y0IpfZsI0I8)

> 🔗 [https://www.youtube.com/watch?v=Y0IpfZsI0I8](https://www.youtube.com/watch?v=Y0IpfZsI0I8)

---

## 🚀 Features

- 🧊 **Glassmorphism on Scroll** — Navbar starts transparent and morphs into a frosted glass surface with backdrop blur.
- 🍔 **Animated Hamburger Toggle** — Three-line icon smoothly transforms into an X with CSS-only transitions.
- 📱 **Full-Screen Mobile Menu** — Staggered fade-in animation for each menu item with hover underline effects.
- 🎯 **Active Section Highlighting** — IntersectionObserver dynamically highlights the current section in the navbar.
- 🖱️ **Smooth Scrolling** — Click any nav link for buttery-smooth scroll to the target section.
- 📐 **Scroll-Triggered Animations** — Feature cards, testimonials, and about section fade-in as they enter the viewport.
- ⌨️ **Keyboard Accessible** — Escape key closes mobile menu, ARIA labels on toggle button.
- 🎨 **Premium Design System** — Curated indigo/violet palette with consistent spacing, typography, and hover effects.
- ⚡ **Ultra Lightweight** — Zero dependencies, under 15KB total — blazing fast load.
- 🖼️ **Browser Mockup** — Interactive CSS-only browser mockup in the About section.

---

## 📁 Project Structure

```
TASK 4/
├── index.html      # Semantic HTML with navbar, hero, features, about, testimonials, contact & footer
├── style.css       # Premium design system — glassmorphism, animations, responsive breakpoints
├── script.js       # Scroll detection, hamburger toggle, IntersectionObserver, smooth scroll
└── README.md       # Project documentation
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic structure with ARIA accessibility attributes |
| **CSS3** | Glassmorphism, CSS custom properties, keyframe animations, grid layouts |
| **Vanilla JS** | Scroll detection, IntersectionObserver, DOM manipulation, keyboard events |

---

## 🖥️ How to Run

```bash
# Navigate to the task directory
cd "TASK 4"

# Open in your default browser
open index.html
```

No build step or dependencies required. Just open `index.html` directly in any modern browser.

---

## 🎨 Design System

| Token | Value | Use |
|---|---|---|
| **Primary Accent** | `#6366f1` | Buttons, active states, gradients |
| **Accent Light** | `#a78bfa` | Gradient endpoints, logo |
| **Background** | `#fafbff` | Clean light background |
| **Surface** | `#ffffff` | Cards, sections |
| **Glass Nav** | `rgba(255,255,255,0.72)` | Scrolled navbar with backdrop-blur |
| **Text Primary** | `#0c0e1a` | Headings and body text |
| **Text Muted** | `#6b7294` | Descriptions and secondary text |
| **Border** | `rgba(99,102,241,0.08)` | Subtle card borders |

---

## ✨ Key Interactions

| Interaction | Behavior |
|---|---|
| **Scroll past 30px** | Navbar gains glassmorphism + shrinks height |
| **Click hamburger** | Full-screen overlay with staggered item reveal |
| **Scroll through sections** | Active nav link updates automatically |
| **Hover feature card** | Card lifts + gradient top-border slides in |
| **Hover mobile link** | Link slides right + underline extends |
| **Press Escape** | Closes mobile menu |
| **Resize to desktop** | Mobile menu auto-closes |

---

## 📄 License

MIT License — feel free to use, modify, and distribute.

---

<p align="center">Made with ❤️ using HTML, CSS & JavaScript</p>
