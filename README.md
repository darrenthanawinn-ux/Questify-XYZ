# Questify.xyz

Turn study notes into boss fights.

## Quick start

1. Open a terminal in this folder (the one containing `setup.js`).
2. `node setup.js`   - writes the whole React + Vite + Tailwind project here
3. `npm install`
4. `npm run dev`

`setup.js` skips files that already exist; run `node setup.js --force` to overwrite them
(needed once if you generated the previous version and want the capybara update).

## What gets generated

- package.json, index.html, vite.config.js, tailwind.config.js, postcss.config.js
- src/index.css, src/main.jsx, src/App.jsx
- src/services/anakinAI.js (mock notes -> multiple-choice boss questions; swap in a real API later)
- src/components/Dashboard.jsx, GameArena.jsx, ShareModal.jsx
- src/components/Capybara.jsx (inline SVG study companion: calm / happy / surprised)
