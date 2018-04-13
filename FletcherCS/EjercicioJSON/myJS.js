'use strict';
const usingFetch = () => {
    const URL = 'base.json';

    fetch(URL)
        .then(response => response.json())
        .then(objetJSON => {
            for (const objet in objetJSON) {
                document.getElementById('key').innerHTML += objet + '<br>';
                document.getElementById('value').innerHTML += objetJSON[objet] + '<br>';
            }
        }).catch( reject =>{
            throw Error({
                type: 'FATAL',
                message: 'An error has ocurred , error: '+ reject + ''
            });
        });
}
window.onload = usingFetch();