'use strict';
(function () {
    const buttonDiscover = document.getElementById('discover');
    const buttonDownload = document.getElementById('download');
    const buttonListen = document.getElementById('listen');
    const modal = document.getElementById('modalTest');
    const buttonModal = document.getElementById('buttonModal');
    const modalClose = document.getElementById('modalClose');
    /**
     * this method added a listen action when a user click on discover button
     */
    buttonDiscover.addEventListener('click', () => {
        document.getElementById('description').innerHTML = `<div class="message"><b>Encuentra tus libros favoritos</b> en academy con mas de 200,000 audiolibros disponibles</div>`;
    });

    buttonDownload.addEventListener('click', () => {
       document.getElementById('description').innerHTML =  `<div class="message"><b>Lleva contigo siempre</b> tus libros favoritos y no pares de escuchar</div>`;
    });

    buttonListen.addEventListener('click', () => {
       document.getElementById('description').innerHTML =  `<div class="message">Disfruta de tus libros por 299 al mes en <b>Central Academy</b></div>`;
    });

    buttonModal.addEventListener('click', () => {
        modal.showModal();
    });

    modalClose.addEventListener('click', () => {
        modal.close();
    });

})();