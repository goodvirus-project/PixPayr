// PixPayr minimal interactions
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const year = document.getElementById('year');
  const form = document.getElementById('waitlistForm');
  const note = document.getElementById('formNote');

  year.textContent = new Date().getFullYear();

  function setTheme(mode) {
    if (mode === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('pp_theme', mode);
  }

  // init theme
  setTheme(localStorage.getItem('pp_theme') || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'));

  if (toggle) {
    toggle.addEventListener('click', () => {
      const isLight = root.classList.contains('light');
      setTheme(isLight ? 'dark' : 'light');
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value.trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        note.textContent = 'Please enter a valid email address.';
        note.style.color = '#f59e0b';
        return;
      }
      // Placeholder submission
      note.textContent = 'Thanks! You\'re on the list.';
      note.style.color = '#22d3ee';
      form.reset();
    });
  }
})();
