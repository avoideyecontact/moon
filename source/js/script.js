'use strict';
var pageHeader = document.querySelector('.page-header');
var headerToggle = document.querySelector('.page-header__toggle');
var navLinksArray = document.querySelectorAll('.page-header__link');

pageHeader.classList.remove('page-header--nojs');

headerToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('page-header--closed')) {
    pageHeader.classList.remove('page-header--closed');
    pageHeader.classList.add('page-header--opened');
  } else {
    pageHeader.classList.add('page-header--closed');
    pageHeader.classList.remove('page-header--opened');
  }
});

for (var i = 0; i < navLinksArray.length; i++) {
  navLinksArray[i].addEventListener('click', function () {
    if (pageHeader.classList.contains('page-header--opened')) {
      pageHeader.classList.remove('page-header--opened');
      pageHeader.classList.add('page-header--closed');
    }
  });
}
