# Notas del día 10 de abril del 2018

A partir de aqui comienzan las notas tomadas en las sesiones de la capacitación.
___

# Comenzando con git

Git es una herramienta indispensable en la vida de un desarrollador; ya sea forntend o backend.
Como una introducción a esta herramienta se muestran los pasos a seguir para su instalación

# Instalación en un ambiente linux
Siguiendo estos pasos tenemos la instalación de git en su versión más reciente
```sh
$ sudo apt-add-repository ppa:git-core/ppa
$ sudo apt-get update
$ sudo apt-get install git
```

# Comandos principales

| Comando | Significado |
| ------ | ------ |
| ```git init``` | Crea un repositorio vacio |
| ```git config --global user.name <"tuNombre">``` | Establece una configuración básica de tu nombre |
| ```git config --global user.name <"tuEmail">``` | Establece una configuración básica de tu email |
| ```git add -A ``` | Agrega archivos al index area |
| ```git add <"tuArchivo.txt">``` | Agrega al index area un archivo en especifico |
| ```git clone https://turepo.com``` | Clona un repositorio en tu local |
| ```git commit -m "tu mensaje aquí"``` | Cambia a la cabecera |
| ```git stauts``` | Muestra la lista de los archivos que se han cambiado |
| ```git push origin master``` | Envia los cambios realizados en la rama al repositorio remoto |
| ```git checkout -b <nombre de la rama>``` | Crea y nos posiciona en la rama dicha |
| ```git remote add upstream https://repo.com``` | Agrega un repositorio remoto |
| ```git remote -v``` | Revisa los repositorios remotos |
| ```git checkout <tu rama>``` | Cambia a la rama deseada |
| ```git pull origin master``` | Actualiza repositorio con los cambios más recientes del repositorio remoto a la rama deseada |
| ```git branch``` | Lista las ramas |


### Todos

 - Continuación de git y finalización...
 - Empezando con EcmaScript6

License
----

MIT


**Free Software, Hell Yeah!**