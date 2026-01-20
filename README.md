# Admin Dashboard Project

This project is a responsive admin dashboard with a theme-switching feature that supports both light and dark modes. The dashboard uses modern CSS Grid layout and vanilla JavaScript for functionality.

---

## File Explanations

### index.html

The HTML file provides the structural foundation for the admin dashboard.

**Key Components:**

1. **Document Setup**
   - Uses HTML5 doctype declaration (`<!DOCTYPE html>`)
   - Sets UTF-8 character encoding for proper text rendering
   - Includes viewport meta tag for responsive design on mobile devices
   - Links to external Google Fonts (Outfit font family with multiple weights)

2. **Head Section**
   - Loads `styles.css` for styling
   - Preconnects to Google Fonts for optimized font loading performance
   - Sets the page title as "Admin Dashboard"

3. **Body Structure**
   - **Dashboard Container** (`div.dashboard-container`): Main wrapper using CSS Grid layout
   - **Header** (`header.header`): Contains the dashboard title and theme toggle button
     - Theme toggle button with icon and text that changes based on current theme
   - **Navigation** (`nav.navigation`): Placeholder for navigation menu
   - **Content Cards**: Three separate card sections for different dashboard features
     - Analytics card
     - Users card
     - Settings card

4. **Script Loading**
   - Loads `script.js` at the end of the body for optimal page load performance

---

### styles.css

The CSS file handles all visual styling, layout, and theme management for the dashboard.

**Key Features:**

1. **CSS Custom Properties (Variables)**
   - Defines theme colors using CSS variables in `:root`
   - Dark theme (default): Dark background, lighter text
   - Light theme: Light background, darker text
   - Variables include: background color, card background, text color, border color, and accent color

2. **Theme System**
   - Uses `data-theme` attribute for theme switching
   - Supports system preference detection with `prefers-color-scheme`
   - Smooth transition between themes by changing CSS variable values

3. **Reset Styles**
   - Universal selector (`*`) removes default margins and padding
   - Sets `box-sizing: border-box` for predictable element sizing

4. **Layout Structure**
   - **Grid Layout**: Uses CSS Grid for the main dashboard layout
   - Grid template areas define semantic regions:
     - Header spans full width at top
     - Navigation takes left column
     - Three cards (analytics, users, settings) in the second row
     - Optional main content area below
   - Responsive grid with specific column and row sizing

5. **Component Styles**
   - **Header**: Flexbox layout with space-between for title and toggle button
   - **Theme Toggle Button**: Styled button with hover effects and accent color
   - **Navigation & Cards**: Consistent styling with dashed borders, rounded corners, and hover effects
   - All cards use the same base `.card` class with modifier classes for grid positioning

6. **Responsive Design**
   - **Tablet (max-width: 1024px)**: Adjusts to 2-column layout
   - **Mobile (max-width: 600px)**: Stacks all elements in single column
   - Maintains usability across all screen sizes

7. **Typography**
   - Uses "Outfit" font family from Google Fonts
   - Various font weights (300, 400, 600) for hierarchy

---

### script.js

The JavaScript file adds interactivity and theme-switching functionality to the dashboard.

**Key Functions:**

1. **DOMContentLoaded Event Listener**
   - Waits for DOM to fully load before executing code
   - Prevents errors from trying to access elements before they exist

2. **Element Selection**
   - Selects the theme toggle button and its child elements (icon and text)
   - Gets reference to document root element for theme attribute manipulation

3. **getCurrentTheme() Function**
   - Checks `localStorage` for saved theme preference
   - Falls back to system preference if no saved theme exists
   - Uses `matchMedia` API to detect system color scheme preference
   - Returns either 'light' or 'dark'

4. **updateToggleUI() Function**
   - Updates the toggle button's visual appearance based on current theme
   - Changes icon: Sun (☀️) for dark mode, Moon (🌙) for light mode
   - Updates button text: "Light Mode" in dark theme, "Dark Mode" in light theme

5. **Initial Setup**
   - Retrieves saved theme from localStorage
   - Applies saved theme by setting `data-theme` attribute on root element
   - Updates button UI to match current theme

6. **Theme Toggle Click Handler**
   - Listens for clicks on the theme toggle button
   - Toggles between light and dark themes
   - Saves new theme preference to `localStorage` for persistence
   - Updates both the DOM attribute and button UI

7. **System Preference Listener**
   - Monitors changes to system color scheme preference
   - Only updates UI if user hasn't manually set a theme
   - Ensures dashboard respects OS-level theme changes

**Key Technologies Used:**
- LocalStorage API for theme persistence across sessions
- MediaQueryList API for system preference detection
- DOM manipulation for dynamic UI updates
- Event listeners for user interactions

---

## Glossary of Terms

| Abbreviation/Term | Full Form / Explanation |
|-------------------|------------------------|
| **HTML** | HyperText Markup Language |
| **CSS** | Cascading Style Sheets |
| **JS** | JavaScript |
| **DOM** | Document Object Model |
| **API** | Application Programming Interface |
| **UTF-8** | Unicode Transformation Format - 8-bit |
| **UI** | User Interface |
| **URL** | Uniform Resource Locator |
| **vh** | Viewport Height (CSS unit) |
| **rem** | Root Em (CSS unit, relative to root font size) |
| **px** | Pixels (CSS unit) |
| **fr** | Fraction (CSS Grid unit) |
| **max-width** | Maximum Width (CSS media query) |
| **preconnect** | Resource hint that tells browser to establish early connection |
| **crossorigin** | Attribute for cross-origin resource sharing |
| **localStorage** | Web Storage API for storing data in browser |
| **matchMedia** | JavaScript API for testing CSS media queries |
| **grid-template-areas** | CSS Grid property for defining named grid regions |
| **grid-template-columns** | CSS Grid property for defining column sizes |
| **grid-template-rows** | CSS Grid property for defining row sizes |
| **:root** | CSS pseudo-class representing document root element |
| **@media** | CSS at-rule for responsive design (media queries) |
| **DOMContentLoaded** | Event fired when HTML document has been parsed |
| **addEventListener** | Method to attach event handlers to elements |
| **querySelector** | Method to select first element matching CSS selector |
| **getElementById** | Method to select element by its ID attribute |
| **setAttribute** | Method to set value of element attribute |
| **getItem** | Method to retrieve data from localStorage |
| **setItem** | Method to store data in localStorage |

---

## Project Structure

```
1c/
├── index.html      # Main HTML structure
├── styles.css      # Styling and theme definitions
├── script.js       # Theme switching functionality
└── README.md       # Project documentation
```

---

## Features

- ✨ **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- 🌓 **Theme Switching**: Toggle between light and dark modes
- 💾 **Persistent Preferences**: Theme choice saved in browser localStorage
- 🎨 **Modern UI**: Clean, professional dashboard interface
- ♿ **System Preference Support**: Respects OS-level theme settings
- 📱 **Mobile-First**: Optimized layout for all screen sizes

---

## How to Use

1. Open `index.html` in a web browser
2. Click the theme toggle button in the header to switch between light and dark modes
3. Your theme preference will be saved automatically
4. The dashboard layout adapts to different screen sizes automatically