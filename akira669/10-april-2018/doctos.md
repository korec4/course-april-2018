# Day 10-april-2018
Documentacion: 
- GitHub (https://git-scm.com/doc) 
- ECMAScript (http://www.ecma-international.org/ecma-262/6.0/)
- Dillinger (https://dillinger.io/)

# Introduccion de GIt
Inicio de arquitectura UPSTREAM
> Upstream => Repositorio principal evitar repositorios corruptos
> Origin => Repositorio donde realizas tus cambios  
> Local => Trabajo local 

### Comandos Basicos
Inicializacion git:
```sh
git init
```
Clonacion de repositorio:
```sh
git clone "repositorio"
```
Estatus del repositorio (modificaciones,nuevos archivos etc.):
```sh
git status
```
Agregar todos los archivos nuevos o modificados:
```sh
git add -A
```
Aplicar los cambios realizdos:
- -m => mensaje del cambio 
```sh
git commit -m "se modifico el archivo controles.js"
```
Envio de cambios al repositorio remoto:
- origin => origen del repositorio donde se clono
- master => Rama a donde se enviaran los cambios
```sh
git push origin master
```
Hisotria del repositorio:
```sh
git log
```