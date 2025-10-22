(function () {
    // Theme utilities (placed near other init code)
    const THEME_KEY = 'site-theme';
    const themeBtns = document.querySelectorAll('#theme-toggle, #theme-toggle-mobile');

    function applyTheme(theme) {
        if (theme === 'dark') document.documentElement.classList.add('dark-theme');
        else document.documentElement.classList.remove('dark-theme');
        localStorage.setItem(THEME_KEY, theme);
        updateToggleUI(theme);
    }

    function updateToggleUI(theme) {
        themeBtns.forEach(btn => {
            if (!btn) return;
            // show sun when dark (click -> bright), moon when bright (click -> dark)
            if (theme === 'dark') {
                btn.textContent = '☀️';
                btn.setAttribute('aria-pressed', 'true');
                btn.title = 'Switch to bright';
            } else {
                btn.textContent = '🌙';
                btn.setAttribute('aria-pressed', 'false');
                btn.title = 'Switch to dark';
            }
        });
    }

    function toggleTheme() {
        const current = localStorage.getItem(THEME_KEY) ||
            (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        applyTheme(current === 'dark' ? 'light' : 'dark');
    }

    // Initialize on DOM ready (merge with your existing DOMContentLoaded handler)
    document.addEventListener('DOMContentLoaded', () => {
        const saved = localStorage.getItem(THEME_KEY) ||
            (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        applyTheme(saved);

        themeBtns.forEach(btn => {
            if (btn) btn.addEventListener('click', toggleTheme);
        });
    });

})();

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
