(function () {
  const root = document.documentElement;
  const saved = localStorage.getItem('tingxiao-theme');
  const systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = saved || (systemDark ? 'dark' : 'light');
  root.dataset.theme = initial;

  function updateButton() {
    const button = document.querySelector('.theme-toggle');
    if (!button) return;
    const dark = root.dataset.theme === 'dark';
    button.textContent = dark ? '☀' : '☾';
    button.setAttribute('aria-label', dark ? 'Use light theme' : 'Use dark theme');
  }

  document.addEventListener('DOMContentLoaded', function () {
    updateButton();
    const button = document.querySelector('.theme-toggle');
    if (button) button.addEventListener('click', function () {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('tingxiao-theme', root.dataset.theme);
      updateButton();
    });
  });
})();
