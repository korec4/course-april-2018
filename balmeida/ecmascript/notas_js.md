# Javascript

### Mejores practicas

```
'use strict'
```
- usar siempre use strict, ; y llaves en if si es de una linea
- para forzar mejores practicas
- constantes con mayuscula y SNAKE_CASE, variables regulares **let camelCase**
- comillas simple ''
- en clases la declaracion de funciones no se utiliza **const**
- no console.log
- _variable es privada, __variable es protegida
- todas las funciones van afuera, con const y arrow 
- para usar ${} necesita estar en  back-ticks `text ${value} text text ` 



```
const myFunction = (param = '') => {
	let boo = '';
};
```

si param viene vacio se le puede dar un valor por defecto
si el parametro se necesita y que no tenga un valor por defecto 

```
if(param === undefined && typeof param === String){
	throw Error({
			type :'FATAL',
			message:'Non sense'
		});
	}else{
	
	}
	
```
## ternarios
condicion ? <true>:<false>
```
param === 9 ? return true : return false;
```

## loops

[Referencia tipo de loops]

solo para iterar arrays (no recomendado ya qye for of es más rapido)

-forEach(element => function(element))

for in se aplica  para objetos que tienen propiedades enumarables

- for(let element in enumerable)


for of sirve para iterar cosas numerable, si en el objecto tiene la bandera 'iterable' 
como array,map,set,string,typedArray
- for(let element of enumerable)

```
let iterable = new Map([['a', 1], ['b', 2], ['c', 3]]);

for (let entry of iterable) {
  console.log(entry);
}

for (let [key, value] of iterable) {
  console.log(value);
  console.log(key);
}
```
2 formas de acceder los valores

### Como documentar

```
/*
*@param <param>:<Type> 
*@description function/class description
*/
```
## librerias utiles

- lodash para manejar mejor arreglos
- moment.js para manejo fechas


[Referencia tipo de loops]:<https://codeburst.io/foreach-vs-for-of-vs-for-in-tug-of-for-d8f935396648>