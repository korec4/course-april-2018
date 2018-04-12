'use strict';

const object = {};
const array = [1,2,3,4,5];
const iterable = new Map (['a', 1], ['b', 2]);

object.name = 'sandrijilla';
/*
*@param param:String
*@description This is an user's name
*/
const myFunction = (param = '') => {
    const boo = '';

    if (param === 'san') {
        // ejemplo de lanzar un error
        throw Error ({
            type: 'Fatal',
            message: 'quete pasa'
        });
    }else{
        return 'entro aqui';
    }

    const functionForEach = (element) =>{
        console.log (element);
        document.getElementById('content').innerText +=element;
    }

    array.forEach(element => {
        functionForEach(element);
    });
    // for Of
    for (let [key, value] of iterable){
        console.log (key);
        console.log (value);
    }
    // o puede ser
    for (let  entry of iterable){
        console.log (entry);
    }
    //for let element in enumerable , o let element of enumerable
}
