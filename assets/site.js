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
    const navlinks = document.querySelector('.navlinks');
    if (navlinks && !navlinks.querySelector('a[href="/projects/"]')) {
      const projectsLink = document.createElement('a');
      projectsLink.href = '/projects/';
      projectsLink.textContent = 'Projects';
      if (window.location.pathname.startsWith('/projects/')) {
        projectsLink.setAttribute('aria-current', 'page');
      }
      const cvLink = navlinks.querySelector('a[href="/CV_Wu_Tingxiao.pdf"], a[href="/cv/"]');
      navlinks.insertBefore(projectsLink, cvLink || navlinks.querySelector('.theme-toggle'));
    }

    updateButton();
    const button = document.querySelector('.theme-toggle');
    if (button) button.addEventListener('click', function () {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('tingxiao-theme', root.dataset.theme);
      updateButton();
    });
  });
})();
