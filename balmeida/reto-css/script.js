(function(){

'use strict'

const footerMobile = document.querySelector('.footer-mobile');

const btnSearch = document.querySelector('.button_discover');
const btnDownload = document.querySelector('.button_download');
const btnEnjoy = document.querySelector('.button_enjoy');

const textSearch = document.querySelector('.mobile-text-1');
const textDownload = document.querySelector('.mobile-text-2');
const textEnjoy = document.querySelector('.mobile-text-3');

 
 btnSearch.addEventListener('click', () => {
	addCssClass(textSearch);
    removeCssClass(textDownload);
	removeCssClass(textEnjoy);
	footerMobile.classList.add('footer-mobile__active');
  })
 
 btnDownload.addEventListener('click', () => {
	addCssClass(textDownload);
    removeCssClass(textSearch);
	removeCssClass(textEnjoy);
	footerMobile.classList.add('footer-mobile__active');
  })
  

 btnEnjoy.addEventListener('click', () => {
    addCssClass(textEnjoy);
    removeCssClass(textSearch);
	removeCssClass(textDownload);
	footerMobile.classList.add('footer-mobile__active');
  })

 const removeCssClass = (element) => {
	 element.classList.remove('active');
	 element.classList.add('deactivated');
 }
 
 const addCssClass = (element) => {
	 
	 element.classList.remove('deactivated');
	 element.classList.add('active');
 }
  
})();