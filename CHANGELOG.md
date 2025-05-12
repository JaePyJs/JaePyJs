# Changelog

All notable changes to this project will be documented in this file.

---

## [Unreleased]

### Added

- **Floating Emoji Background**: Added animated floating emoji background to homepage for increased visual appeal.
- **Global Utility CSS Classes**: Converted frequently-used classes (`gradientText`, `reveal`, `show`, and keyframes) to global scope for easier DOM/className usage.
- **Snake Game and Contribution Snake**: Integrated both a GitHub contribution snake animation and a playable snake game under `/games`.
- **Contact Form**: Implemented a contact form with state management and user feedback on submission.

### Fixed

- **CSS Module Errors**: Removed global selectors from `Home.module.css` and moved them to `globals.css` to comply with CSS module standards.
- **Animation & Reveal Bugs**: Fixed issues with reveal/animation classes not applying due to CSS module scoping.
- **TypeError in JS**: Investigated and addressed `Cannot read properties of null` errors related to DOM queries in JS.
- **Linting**: Fixed invalid CSS syntax and improved structure for maintainability.

### Improved
- Ensured all animations (gradient text, reveal, floating emojis) work with both React and direct DOM usage.
- Enhanced responsive design and accessibility across portfolio UI.
- Improved visual consistency and micro-interactions throughout the app.

### Improved
- Enhanced interactivity and visual vibrancy throughout the portfolio
- Added IntersectionObserver-powered reveal animations for sections
- Neon and underline hover effects for navigation and project links
- Responsive, fluid typography for headers

---

## [Planned]
- Add parallax or 3D card effects
- Integrate Lottie or animated SVG icons
- Add contact form and blog section
- Deploy portfolio to Vercel/Netlify

---

> Generated and maintained by Cascade AI
