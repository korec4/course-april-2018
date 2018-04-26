(function(){

'use strict'

const navbarButtonMobile = document.querySelector('.navbar__button-mobile');
const sidenav = document.querySelector('.sidenav');
const sidenavClose = document.querySelector('.sidenav__close');


navbarButtonMobile.addEventListener('click',() => {
	sidenav.classList.add('sidenav-active');
}); 

sidenavClose.addEventListener('click',() => {
	sidenav.classList.remove('sidenav-active');
}); 


})();