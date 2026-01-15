document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const root = document.documentElement;
    const toggleIcon = themeToggle.querySelector('.toggle-icon');
    const toggleText = themeToggle.querySelector('.toggle-text');

    // Utility to get current applied theme
    const getCurrentTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme;
        return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    };

    // Update the button UI based on the theme
    const updateToggleUI = (theme) => {
        const isLight = theme === 'light';
        toggleIcon.textContent = isLight ? '🌙' : '☀️';
        toggleText.textContent = isLight ? 'Dark Mode' : 'Light Mode';
    };

    // Initial setup
    const initialTheme = getCurrentTheme();
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        root.setAttribute('data-theme', savedTheme);
    }
    updateToggleUI(initialTheme);

    // Listen for manual toggle
    themeToggle.addEventListener('click', () => {
        const currentTheme = getCurrentTheme();
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        root.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateToggleUI(newTheme);
    });

    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            updateToggleUI(e.matches ? 'light' : 'dark');
        }
    });
});
