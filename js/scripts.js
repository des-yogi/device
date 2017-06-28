"use strict";

(function() {

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

  window.addEventListener('keydown', function (e) {
    if(window.utils.isDeactivateEvent(e) && subMenuElem.classList.contains('main-nav__submenu--open')) {
      subMenuElem.classList.remove('main-nav__submenu--open');
    }
  } );

})();

window.utils = (function () {

  var ENTER_KEY_CODE = 13;
  var ESCAPE_KEY_CODE = 27;

  var isKeyboardEvent = function (e) {
    return typeof e.keyCode !== 'undefined';
  };

  return {
    isActivateEvent: function (e) {
      return isKeyboardEvent(e) && e.keyCode === ENTER_KEY_CODE;
    },

    isDeactivateEvent: function (e) {
      return isKeyboardEvent(e) && e.keyCode === ESCAPE_KEY_CODE;
    }
  };

})();
