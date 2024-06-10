document.querySelector("html").setAttribute(
  "data-bs-theme",
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
);