document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    // mudar nome user pelo banco de dados
    const userNameElement = document.getElementById('user-name');
    if (userNameElement) {
        userNameElement.textContent = 'Olá, Ana'; // mudar ana quando precisar
    }

    function setTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-theme');
            themeIcon.innerHTML = '&#x1F319;'; //lua
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-theme');
            themeIcon.innerHTML = '&#x2600;&#xFE0F;'; //sol
            localStorage.setItem('theme', 'light');
        }
    }

    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme || 'light');

    themeToggleBtn.addEventListener('click', () => {
        const isDark = body.classList.contains('dark-theme');
        setTheme(isDark ? 'light' : 'dark');
    });
});
