# Curso front end 
  
# Clase 1 - 10 de Abril del 2018
Hemos revisado en esta clase los temas:

 - Emacscript 6
 - git

# EmacScript (JavaScript)
Estandar del lenguaje EmacScript y su documentación de referencia 
 * [ECMAScript](http://www.ecma-international.org/ecma-262/6.0/#sec-standard-object) Documentación oficial
 * [MDN web docs](https://developer.mozilla.org/es/docs/Web/JavaScript) Documentacion guiada de Moz://a
 
# Git
Software de control de versiones diseñado por Linus Torvalds, en esta ocasión vamos a crear un fork para desarrollo y un upstream donde estara el desarrollo maestro, ademas usaremos una herramienta para la documentacion y la estructura de mensajes
 * [git-scm](https://git-scm.com/doc) Documentación oficial
 * [karma](http://karma-runner.github.io/2.0/dev/git-commit-msg.html) Estandar para mensajes de commits 
 * [Dillinger](https://dillinger.io/) Estructura para documentar archivo MD (como este)
 
# comandos Git para iniciar el proyecto

Despues agregamos la repo donde subiremos los avances al servidor origen en este ejemplo sera nuestro repositorio git fork de master por ejemplo

* [upstream](https://github.com/alfonsorios96/course-april-2018) Repositorio git principal 
* [fork](https://github.com/korec4/course-april-2018) Repositorio clonado para nuestro desarrollo

Primero es necesario entrar a la carpeta raiz donde se iniciara el proyecto git, 
posteriormente ingresamos el comando para inicializar el proyecto
```sh
$ git init
```

Ahora agregamos el repositorio remoto 'origin' de nuestro repositorio git

```sh
$ git remote add origin https://github.com/korec4/course-april-2018
```

comprobamos el estatus del remote 

```sh
$ git remote -v
origin	https://github.com/korec4/course-april-2018.git (fetch)
origin	https://github.com/korec4/course-april-2018.git (push)
```
Ahora agregamos el repositorio upstreams
```sh
$ git remote add upstream https://github.com/alfonsorios96/course-april-2018.git
```
verificamos el status del remote
```sh
$ git remote -v
origin	https://github.com/korec4/course-april-2018.git (fetch)
origin	https://github.com/korec4/course-april-2018.git (push)
upstream	https://github.com/alfonsorios96/course-april-2018.git (fetch)
upstream	https://github.com/alfonsorios96/course-april-2018.git (push)
```
Los comando basicos de git
Comando para agregar todos los archivos creado del repositorio:

```sh
$ git add .
````
si queremos agregar un archivo en especial debemos agregarlo por su nombre

```sh
$ git add readme.md
```

si necesitamos agregarla directorios o subdirectorios podemos agregar comodines * y al finalizar el '/' por ejemplo

```sh
$ git add front_modules/index.html
$ git add front_modules/js/*
```
Ademas es necesario crear un archivo .gitignore que nos ayudara a no vigilar directorios creador por el editor de desarrollo, archivos temporales del sistema, etc...

```sh
$ vim .ignore
```

Por ejemplo algunos archivos pueden ser .idea, node_modules etc.. posteriormente a esta configuración podremos trabajar en nuestro entorno de desarrollo.

# Comandos para trabajar 
actualizar nuestro estorno de upstream
```sh
$ git pull upstream master
```
Agregar nuevos archivos o directorios
```sh
$ git add miarchivo.md
$ git add micarpeta/archivos.txt
```

# Antes de realizar un push debemos actualizar nuestro repositorio de upstreams
```sh
$ git pull upstream master
```
Posteriormente podremos subir cambios a nuestro repo, donde 'origin'  es nuestro alias de nuetro repo y master la rama actual a modificar
```sh
$ git push origin master
```

fin


# Clase 2: 11-Abril-2018
Este dia hemos reforzado la clase de git con una practica para enfatizar comandos.

 [Practice-git](https://github.com/grayghostvisuals/practice-git) Repo git para realizar fork y trabajar en el repositorio propio.
 # Conceptos nuevos de Git
 - git checkout
 - git branch
 - git log
 - git status
 - git diff
 
  # Conceptos nuevos de EmacScript6
   - Operador condicional ternario
   - forEach
   - for-of
   - for-in
  
# Operador condicional (ternario)
Una expresion se evalua como ***True*** o ***False*** 
**Descripción**
Si la condición es **true**, el operaador retorna el valor de la primera expresión; de lo contrario devuelve el valor de la expresion2. Por ejemplo:

>Tenemos dos gatos llamados **Nube** y **Esponja**
>Nube le gusta el jamón y a Esponja las croquetas

Entonces podremos realizar la siguiente función:

```javascript
    'la comida de Nube es: '+(isNube ? 'jamon' : 'croquetas')
````
# forEach
forEach es exclusivo de la familia de los arrays (arreglos), solo funciona con datos de matrices el metodo basicamente itera sobre los elementos de la matriz y ejecuta la devolucion de la llamada
```js
 const array = [1,2,3,4];
 array.forEach(element => {
    console.log(element)
 }
```
# for in
el for-in es aplicable sobre un dato de tipo objeto, valor que itera sobre las propiedades del objeto. ejemplo

```js
 const meObject = {
    name: "Alejandro"
    activity: "web developer"
 }
 for(let property in meObject){
    console.log(property)    
}
```
# for of
for of es un loop (bucle) que itera a travez de los elementos de un objeto iterable (incluyendo Array, Map, Set, String, TypeOfArray), ejecutando las sentencias de cada iteraci´ón con el valor del elemento que corresponda. ejemplo

```js
let iterable = [10, 20, 30];

for(let value of iterable){
 value +=1;
 console.log(value);
}
```
**Nota:**
se debera usar la palabra **const** (constante) si el valor de la variable no sera modificado y debera ser al inicio, y **let** si su valor va a cambiar constantemente como es el caso de este bloque.

#Ejemplos for of

**Iterando un Array**
```js
let iterable = [10,20,30];
for(let value of iterable){
    value +=1;
    console.log(value);
}

/**
*vista en consola
*11
*21
*31
**/
```

**Iterando un TypedArray**

```js
let iterable = new Uint8Array([0x00, 0xff]);
for(let value of iterable){
    console.log(value)
}
//0
//255
```
**Iterando un Map**
```js
let iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);
for (let entry of iterable) {
  console.log(entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (let [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```
**Iterando un Set
```js
let iterable = new Set([1, 1, 2, 2, 3, 3]);
for (let value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```
  # Referencias:
  [Trello](https://trello.com/b/j87TzTJ2/tablero-sin-t%C3%ADtulo): Herramienta online que usaremos como marco de trabajo (scrum). Trello es un software de administración de proyectos con interfaz web, cliente para iOS y android para organizar proyectos.
  [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Conditional_Operator): Operador condicional ternario
 [Codeburst.io](https://codeburst.io/foreach-vs-for-of-vs-for-in-tug-of-for-d8f935396648): forEar vs for-of vs for-in
[Lodash](https://lodash.com/): Moderna librearia js
[Moment.js](https://momentjs.com/): Libreria js para manipular fechas

hasta la proxima...

 # Clase 11 de Abril de 2018
 
 * NodeJS
 
 NodeJS es un entorno de ejcusión para javascript construido con el motor v8 de chrome
  Node.js usa un modelo de operaciones E/S sin bloqueo y orientado a eventos, que lo hace liviano y eficiente. 
  El ecosistema de paquetes de Node.js, npm, es el ecosistema mas grande de librerías de código abierto ...

 # Como instalar nodeJS
 
 * Windows 
 
 Descargar su instalador desde la pagina oficial de nodeJS y seguir los pasos (siguiente, siguiente...)
 
 * Linux /MacOS
 
 Desde el interprete de comando (bash) ingresa el comando
 ```sh
 $ curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash 
 or
 $ sudo apt-get install -y nodejs
 ```


