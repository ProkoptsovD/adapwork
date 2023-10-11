window.addEventListener('DOMContentLoaded', async () => {
  try {
    import('./js/select.js');
    import('./js/open-mobile-menu.js');
    import('./js/reveal-text-on-scroll.js');
  } catch {
    console.error('Packages were not loaded');
  }
});
