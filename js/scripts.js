"use strict";

var mainNav = document.querySelector('.main-nav');
var subMenuOpenLink = mainNav.querySelector('.main-nav__link');
var subMenuElem = mainNav.querySelector('.main-nav__submenu');

var mouseClickHandler = function (e) {
  e.preventDefault();
  subMenuElem.classList.toggle('main-nav__submenu--open');
};

var toggleMenu = function (e) {
  if (subMenuElem.classList.contains('main-nav__submenu--open')) {
    subMenuElem.classList.remove('main-nav__submenu--open');
  }
  subMenuOpenLink.addEventListener('click', mouseClickHandler);
};

window.addEventListener('DOMContentLoaded', function (e) {
  toggleMenu(e);
});
