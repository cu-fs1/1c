# Copilot Instructions for Admin Dashboard

## Project Overview
A responsive admin dashboard with light/dark theme switching. Single-page app using vanilla HTML, CSS Grid layout, and JavaScript. No build tools, frameworks, or dependencies—runs directly in browser.

## Architecture Patterns

### CSS Custom Properties (Theme System)
- All colors defined as CSS variables in `:root` selector
- Two color schemes: `[data-theme="dark"]` and `[data-theme="light"]` with overrides
- Variables: `--bg-color`, `--card-bg`, `--text-color`, `--header-bg`, `--border-color`, `--accent-color`
- When updating colors, always define them in both theme contexts (`:root` dark default + `[data-theme="light"]` override)
- Example in [styles.css](styles.css#L1-L30)

### CSS Grid Layout
- Main container uses named `grid-template-areas` for semantic layout: `header`, `nav`, `analytics`, `users`, `settings`, `main`
- Responsive by redefining grid-areas at breakpoints (1024px, 600px)
- Structure in [styles.css](styles.css#L44-L52), responsive rules at [lines 129-157](styles.css#L129-L157)

### Theme Persistence
- Uses `localStorage.getItem('theme')` to check saved preference, `setItem('theme', value)` to save
- Falls back to system preference via `window.matchMedia('(prefers-color-scheme: light)')` if no saved theme
- Toggle function sets `data-theme` attribute on `document.documentElement` (root), which triggers CSS rule changes
- See [script.js](script.js#L7-L37)

## Critical Workflows

### Adding Theme-Aware Colors
1. Add new CSS variable in both `:root` and `[data-theme="light"]` selectors
2. Use `var(--variable-name)` in component styles
3. Verify visual appearance by toggling theme in browser

### Modifying Grid Layout
1. Update `grid-template-areas` string (order matters—affects visual layout)
2. Adjust `grid-template-columns`/`grid-template-rows` values
3. Add corresponding responsive rules for 1024px and 600px breakpoints
4. Test at each breakpoint (DevTools responsive design mode)

### Adding New Components
1. Create `.card` element in [index.html](index.html) with class and grid-area (e.g., `card card-reports`)
2. Add CSS selector `.card-reports { grid-area: reports; }` in [styles.css](styles.css)
3. Update grid layout in `:root` selector to include new area
4. Ensure grid dimensions accommodate new component

## Project Conventions

- **HTML Structure**: Minimal—only semantic elements and data containers; no inline JavaScript or event attributes
- **CSS Naming**: BEM-like with single class for layout area (`.card-analytics`), no ID selectors
- **JavaScript Pattern**: Event-driven; all logic inside `DOMContentLoaded` listener to ensure DOM ready
- **Responsive Strategy**: Mobile-first mindset—start with mobile grid, expand at breakpoints
- **Font**: "Outfit" family from Google Fonts; weights used: 300 (light), 400 (regular), 600 (bold)
- **Colors**: GitHub-inspired dark theme (#0d1117 bg, #58a6ff accent); light theme uses soft whites (#f6f8fa)

## Testing Theme System
- **Manual Toggle**: Click theme button, verify icon changes (☀️ → 🌙) and colors switch
- **Persistence**: Toggle theme, refresh page—theme should persist
- **System Preference**: Test in DevTools (Rendering → Emulate CSS media feature prefers-color-scheme)
- **Breakpoints**: Test responsive layout at 1024px and 600px widths

## Key Files Reference
- [index.html](index.html): Structure, grid container, header, nav, cards
- [styles.css](styles.css): Grid layout, theme colors, responsive rules
- [script.js](script.js): Theme toggle logic, localStorage handling, system preference detection
- [README.md](README.md): Detailed technical explanation and glossary
