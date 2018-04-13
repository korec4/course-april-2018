notas del día

## Datos curiosos de Javascript

 - Javascript [no][dill] es orientado a objetos  es orientado a prototipos :pokerface:

 - Ecmascript 6 (2015) trajo consigo enormes cambios en algunas secciones, es uno de los más estables (link de la docu).
 
## Nuevos cambios de javascript con ES6
 
 - Todas las variables (var) son renombradas con const o let según convenga, pero es altamente recomendado hacer uso de const siempre.
 
 - Se deja de ocupar la palabra reservada *funtion* y es representada ahora por una *arrow funtion* '=>'
  
  - De ser necesario se pueden declarar valores por defecto de los parametros dentro de una función.

 - El uso de *forEach* va en descenso y de hecho no se recomeinda hacer uso de él.
 
 - Se introduce el uso de las funciones *asincronas* así como las *promises*
 
 

mandar errores es de la forma

throw Error({
    type:'FATAL',
    message: 'something'
});


uso del 'use strict' al inicio siempre y define todo.

uso del typeOf

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
para extraer datos y no usar console.log, usemos endpoints debugger

tener todo el ingles