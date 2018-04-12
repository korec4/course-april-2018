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
