'use strict';

class myClase {
    // asincrono promise
    // const promise = new Promise;
    // promise.then();


    //aqui no lleva tipo de variable const o let 
    functionForEach = (element) =>{
        console.log (element);
        document.getElementById('content').innerText +=element;
    }
}
