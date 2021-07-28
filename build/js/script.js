'use strict';
var pageHeader = document.querySelector('.page-header');
var headerToggle = document.querySelector('.page-header__toggle');
var navLinksArray = document.querySelectorAll('.page-header__link');
var infoBlock = document.querySelector('.info');
var pageBody = document.querySelector('.page-body');

if (headerToggle && navLinksArray && pageHeader && infoBlock && pageBody) {
  pageHeader.classList.remove('page-header--nojs');
  infoBlock.classList.remove('info--nojs');

  headerToggle.addEventListener('click', function () {
    if (pageHeader.classList.contains('page-header--closed')) {
      pageHeader.classList.remove('page-header--closed');
      pageHeader.classList.add('page-header--opened');
      pageBody.classList.add('no-scroll');
    } else {
      pageHeader.classList.add('page-header--closed');
      pageHeader.classList.remove('page-header--opened');
      pageBody.classList.remove('no-scroll');
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
}

/* eslint-disable */
var phoneMask = IMask(
  document.getElementById('phone-mask'), {
    mask: '+{7}(000)000-00-00'
  });
