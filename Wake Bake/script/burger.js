const burgerButton = document.getElementById('buttonMenuOpen');
const burgerMenu = document.getElementById('burgerMenu');
burgerButton.addEventListener('click', function (e) {
  if (window.innerWidth <= 900) {
    e.preventDefault();
    burgerMenu.classList.toggle('menu--active');
    burgerButton.classList.toggle('nav__burger--active');
  }
});
window.addEventListener('resize', function () {
  if (window.innerWidth > 900) {
    burgerMenu.classList.remove('menu--active');
    burgerButton.classList.remove('nav__burger--active');
  }
});
const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    burgerMenu.classList.remove('menu--active');
    burgerButton.classList.remove('nav__burger--active');
  });
});

