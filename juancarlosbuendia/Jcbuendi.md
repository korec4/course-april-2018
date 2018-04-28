###Dillinger is a cloud-enabled, mobile-ready, offline-storage, AngularJS powered HTML5 Markdown editor.


mis primeras notas del curso de centro Polymer 

lo que mas me gusta hacer 

desarrollo dediseño web 

el peor error que e cometido es matar un servidor por una mala compilacio 

comentarios con git

---


comentarios EcmaScript 6

constantes

    const object = {};

arrow fuction


const  myfunction = (param = '') =>{
    //const boo = '';
    if (param === undefined){
        throw Error({
            type: 'FATAL',
            message: 'el vlor esta vacio'
        });
    }else{

    }

}

for of and for in

for of se utiliza para todos

Array
Map
Set
String
TypedArray

Map

entry es llave valor

destructury

key value

for in

solo sirve para iterar objetos

dejaar de usar el for normal y el for each conume muchos recursos


buenas practicas

use strict
; es obligatorio

camel case

uso de comiilas simples 'comillas'


class capial case


asincronia

return

continiu

break

### JavaScript del Lado del Servidor

> Las primeras encarnaciones de JavaScript vivían en los browsers. Pero esto es > sólo el contexto. Define lo que puedes hacer con el lenguaje, pero no dice mucho > acerca de lo que el lenguaje mismo puede hacer. JavaScript es un lenguaje > "completo": Lo puedes usar en muchos contextos y alcanzar con éste, todo lo que > puedes alcanzar con cualquier otro lenguaje "completo".

> Node.js realmente es sólo otro contexto: te permite correr código JavaScript en  el >backend, fuera del browser.

>Para ejecutar el código JavaScript que tu pretendes correr en el backend, este necesita ser interpretado y, bueno, ejecutado, Esto es lo que Node.js realiza, haciendo uso de la Maquina Virtual V8 de Google, el mismo entorno de ejecución para JavaScript que Google Chrome utiliza.

>Además, Node.js viene con muchos módulos útiles, de manera que no tienes que escribir todo de cero, como por ejemplo, algo que ponga un string a la consola.

[![N|Solid](https://www.webpunks.co/wp-content/uploads/2016/08/nodejs-modules-webentwicklung-webdevelopment-webpunks.jpg)](https://nodejs.org/es/docs/)