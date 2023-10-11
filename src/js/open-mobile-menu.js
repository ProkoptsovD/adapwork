const mobileMenuButtons = document.querySelectorAll(
  '[data-selector="mobile-menu-button"]'
);
const dropdown = document.querySelector(
  '[data-selector="mobile-menu-dropdown"]'
);

const handleClick = event => {
  const isOpened = dropdown?.classList.contains('open');
  event.target.setAttribute('aria-expanded', String(isOpened));

  dropdown?.classList.toggle('open');
  document.body.classList.toggle('no-scroll');
};

mobileMenuButtons.forEach(button => {
  button.addEventListener('click', handleClick);
});
