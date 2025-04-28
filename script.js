function toggleTheme() {
        const body = document.body;
        body.classList.toggle('dark-mode');
        const button = document.querySelector('.toggle-btn');
        if (body.classList.contains('dark-mode')) {
          button.textContent = '☀️ Light Mode';
        } else {
          button.textContent = '🌙 Dark Mode';
        }
      }
