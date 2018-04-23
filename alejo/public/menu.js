'use strict';
(function () {

    const navbarButtonMobile = document.querySelector('.navbar__button-mobile');
    const sidenav = document.querySelector('.sidenav');
    const sidenavClose = document.querySelector('.sidenav-close');
    navbarButtonMobile.addEventListener('click', () => {
        console.log('click the navbar_button-mobile');
        sidenav.classList.add('sidenav-active');
    });

    sidenavClose.addEventListener('click', () =>{
       sidenav.classList.remove('sidenav-active');
    });
})();
