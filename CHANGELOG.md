# Changelog

All notable changes to this project will be documented in this file.

---

## [2023-05-14] - Major Profile Update

### Added

- **Modernized GitHub Profile**: Completely redesigned GitHub profile README with improved layout and visual appeal
- **Enhanced Tech Stack Section**: Reorganized tech stack into categories (Languages, Frontend, Backend & Database, Tools)
- **Improved Contact Information**: Updated contact methods and added school email
- **Better Visual Organization**: Added consistent styling and centered content for better readability

### Fixed

- **Portfolio Link**: Updated portfolio link status in TextMe.md to indicate it's under development
- **Visual Consistency**: Fixed inconsistent styling and alignment issues
- **Content Organization**: Improved the structure and categorization of information

### Improved

- Enhanced overall visual appeal with consistent styling
- Better organization of projects and skills
- More professional presentation of contact information
- Cleaner section separators and visual hierarchy

---

## [Unreleased]

### Added

- **Floating Emoji Background**: Added animated floating emoji background to homepage for increased visual appeal
- **Global Utility CSS Classes**: Converted frequently-used classes (`gradientText`, `reveal`, `show`, and keyframes) to global scope for easier DOM/className usage
- **Snake Game and Contribution Snake**: Integrated both a GitHub contribution snake animation and a playable snake game under `/games`
- **Contact Form**: Implemented a contact form with state management and user feedback on submission

### Fixed

- **CSS Module Errors**: Removed global selectors from `Home.module.css` and moved them to `globals.css` to comply with CSS module standards
- **Animation & Reveal Bugs**: Fixed issues with reveal/animation classes not applying due to CSS module scoping
- **TypeError in JS**: Investigated and addressed `Cannot read properties of null` errors related to DOM queries in JS
- **Linting**: Fixed invalid CSS syntax and improved structure for maintainability

### Improved

- Ensured all animations (gradient text, reveal, floating emojis) work with both React and direct DOM usage
- Enhanced responsive design and accessibility across portfolio UI
- Improved visual consistency and micro-interactions throughout the app
- Added IntersectionObserver-powered reveal animations for sections
- Neon and underline hover effects for navigation and project links
- Responsive, fluid typography for headers

---

## [Planned]

- Add parallax or 3D card effects
- Integrate Lottie or animated SVG icons
- Add contact form and blog section
- Deploy portfolio to Vercel/Netlify
- Create a custom domain for the portfolio
- Add project showcase with detailed case studies

---

> Last updated: May 14, 2023
