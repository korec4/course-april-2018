'use strict'

const URL_NAME = 'http://my-site.com:9090'
const object = {}

/*
@param param:String
@description: This is for test the loop
 */
const myfunction = (param) => {
    for (let element of object){
        let name = '';
    }
}

/*
class MyClass {
    const functionA = () => {};
}*/

const promise = new Promise((resolve, reject) => {
    if(user.name === 'Jorge'){
        resolve(user);
    } else {
        reject(Error('This is not Jorge'));
    }
});

promise
    .then()
    .catch();

for (let iterable of array){
    if (iterable.uid === 2){
        continue;
    }
    throw Error('Not a number 2');
}