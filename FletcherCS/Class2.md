notas del día

javascript no es orientado a objetos es orientado a prototipos (lo que sea quue eso signifque)

declarar variables const nombre = tipo;

declarar funciones const funcion = () => {
    let boo = "";
};

parametros dentro de la funcion

conts funcion = (param = '') => {}

cuando necesariamente ocupemos esa variable

mandar errores es de la forma

throw Error({
    type:'FATAL',
    message: 'something'
});


uso del 'use strict' al inicio siempre y define todo.

uso del typeOf

diferencias entre === & ==

uso del switch, usarlo despues de 3 o más

operador ternario de if
expresion ? funcion : funcion

forEach es unicamente para los arreglos
for-in es para los objetos y obtemos de esta forma las posiciones.
for-of es para arrays, map, set, string, typedArray

todas las funciones son constantes

mapa, recomendado para internalizacion, llave:valor
además podemos destructurar en js 
for (let [key, value] of iterable) {
  console.log(value);
  console.log(key);
}

https://codeburst.io/foreach-vs-for-of-vs-for-in-tug-of-for-d8f935396648

jsfiddle

#clases en js

    class Myclass{
        funtionA 
    }

#funciones asincronas

declaramos una promesa

const promise = new Promise ( (resolve,reject) => {
    if(user.name === 'Alfonso'){
        resolve(user);
    }else{
        reject(Error('Error'));
    }
} );

para llamar a una promesa

promise

    .then(); //cuando se resuelve la promesa
    .catch(); //cuando rechaza una promesa

#buenas practias

##docuentar codigo
/*
* @param param: String
* @description This is a description
* 
*/

Use strict es obligatorio

uso de llaves y comas obligatorios

camelcase, empezar con minuscula, si el nombre es largo y consta de dos palabras la sigueinte palabra es en mayusculas, para funciones y variables

para las constantes hacemos uso de uppercase, si son dos palabras y va con guion bajo, URL_FACEBOOK

nada de comillas dobles, unicamente uso de comillas simples, aplicando los estandares

las clase inician con mayusculas class MyClase

no se permiten los console.log, uso de debugging, breakpoint, uso de debugger, es un breakpoint escrito dentro del codigo

no usar console.log para nada 
nada de codigo muerto
para extraer datos y no usar console.log, usemos console.log o debugger

tener todo el ingles