'use strict';
const usingFetch = () => {
    const URL = 'base.json';

    fetch(URL)
        .then(response => response.json())
        .then(objetoJSON => {
            for (const objeto in objetoJSON) {
                document.getElementById('key').innerHTML += objeto + '<br>';
                document.getElementById('value').innerHTML += objetoJSON[objeto] + '<br>';
            }
        }).catch( reject =>{
            throw Error({
                type: 'FATAL',
                message: 'An error has ocurred , error: '+ reject + ''
            });
        });
}
window.onload = usingFetch();