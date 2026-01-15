# Admin Dashboard - Code Documentation

This document provides a comprehensive, line-by-line explanation of the core files in this project: `index.html`, `styles.css`, and `script.js`.

---

## 1. `index.html` - The Structure

The `index.html` file defines the semantic structure and content of the Admin Dashboard.

### Header Section (`<head>`)
- **Line 1: `<!DOCTYPE html>`**: The **Document Type Declaration** (DOCTYPE) tells the browser that this document is an HTML5 document.
- **Line 2: `<html lang="en">`**: The root element of the page. `lang="en"` specifies that the **language** of the content is English.
- **Line 3: `<head>`**: Contains metadata about the document (information that isn't displayed on the page itself).
- **Line 4: `<meta charset="UTF-8">`**: Specifies the **Character Set** for the document as UTF-8, which includes almost all characters from all human languages.
- **Line 5: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`**: Configures the **viewport** (the user's visible area of a web page). `width=device-width` sets the width to follow the screen-width of the device, and `initial-scale=1.0` sets the initial zoom level.
- **Line 6: `<title>Admin Dashboard</title>`**: Sets the title shown in the browser's title bar or tab.
- **Line 7: `<link rel="stylesheet" href="styles.css">`**: Links an external CSS file. 
    - `rel="stylesheet"`: **Relationship** (full form: Relation) specifies that the linked document is a stylesheet.
    - `href="styles.css"`: **Hypertext Reference** provides the path to the CSS file.
- **Line 8-9: `<link rel="preconnect" ...>`**: Tells the browser to establish a connection to the font servers early to improve loading performance.
    - `crossorigin`: Allows the browser to share resources across different origins (**Cross-Origin Resource Sharing**).
- **Line 10: `<link href="..." rel="stylesheet">`**: Fetches the 'Outfit' font family from Google Fonts.

### Body Section (`<body>`)
- **Line 12: `<body>`**: Contains all the visible content of the web page.
- **Line 13: `<div class="dashboard-container">`**: A container that holds the entire layout, styled as a grid in CSS.
- **Line 14-20: `<header class="header">`**: The top section containing the title and theme toggle.
    - **Line 16: `<button id="theme-toggle" ...>`**: A button used to switch between Light and Dark modes.
- **Line 22-26: `<nav class="navigation">`**: The navigation sidebar of the dashboard.
- **Line 28-38: `<div class="card ...">`**: Different sections (Analytics, Users, Settings) styled as cards.
- **Line 40-42: `<main class="main-content">`**: The primary area where the main content of the page would go.
- **Line 44: `<script src="script.js"></script>`**: Links the external JavaScript file.
    - `src="script.js"`: **Source** specifies the path to the script file.

---

## 2. `styles.css` - The Styling

The `styles.css` file defines the visual appearance, color themes, and layout.

### Variables and Themes
- **Lines 1-10: `:root { ... }`**: Defines global CSS variables.
    - `--bg-color`: Background Color.
    - `--card-bg`: Card Background.
    - `--border-color`: Color used for borders.
    - `--accent-color`: The primary "action" or "highlight" color.
- **Lines 12-22: `@media (prefers-color-scheme: light)`**: A media query that detects if the user's system preference is set to 'light' mode and applies specific colors.
- **Lines 24-42: `[data-theme="light/dark"]`**: Attribute selectors that override the variables when the `data-theme` attribute is changed on the HTML element via JavaScript.

### General Styles and Layout
- **Lines 44-48: `* { ... }`**: The universal selector resets margin and padding for all elements and sets `box-sizing: border-box` so that padding and borders are included in the element's total width/height.
- **Lines 50-56: `body { ... }`**: Sets the default font (**Outfit**), colors, and ensures the body fills the minimum height of the screen.
- **Lines 58-69: `.dashboard-container { ... }`**: Uses **CSS Grid** to create a complex layout.
    - `grid-template-areas`: Defines the named areas of the grid (header, nav, analytics, users, settings, main).
    - `grid-template-columns: 280px 1fr 1fr 1fr;`: Sets the first column to 280 **Pixels** (px) and the others to equal fractions of the remaining space (**Fractional Units** / fr).
- **Lines 105-133: `.navigation`, `.card`**: Styled containers with borders and padding.
    - `padding: 2rem;`: Sets padding to 2 **Root EM** (rem), which is a unit relative to the font-size of the root element (usually 16px).
- **Lines 144-169: `@media (max-width: ...)`**: **Media Queries** that change the grid layout for smaller screens like tablets and mobile phones to ensure the site is responsive.

---

## 3. `script.js` - The Logic

The `script.js` file handles the interactivity, specifically the theme toggling functionality.

- **Line 1: `document.addEventListener('DOMContentLoaded', ...)`**: Wait until the **Document Object Model** (DOM) - the internal structure of the page - is fully loaded before running the code.
- **Lines 2-5: `const ... = document.getElementById/querySelector(...)`**: Selects specific HTML elements to interact with using their ID or Class.
- **Lines 8-12: `const getCurrentTheme = () => { ... }`**: A function that determines the current theme by checking:
    1. **Local Storage**: Data saved in the browser that persists after refreshing.
    2. **System Preference**: Uses `window.matchMedia` (an **Application Programming Interface** / API) to check if the browser prefers a light color scheme.
- **Lines 15-19: `const updateToggleUI = (theme) => { ... }`**: Updates the **User Interface** (UI) of the toggle button (icon and text) based on the current theme.
- **Lines 22-27: Initial Setup**: Applies the saved theme from local storage if it exists and updates the UI.
- **Lines 30-37: `themeToggle.addEventListener('click', ...)`**: Listens for a click "event" on the toggle button.
    - When clicked, it calculates the new theme, updates the `data-theme` attribute on the `<html>` element, saves it to `localStorage`, and updates the button UI.
- **Lines 40-44: `window.matchMedia(...).addEventListener('change', ...)`**: Listens for when the user changes their system's color scheme preference (e.g., from Light to Dark mode in their OS settings) and applies it if the user hasn't manually overridden it.