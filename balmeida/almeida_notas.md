#notas

Upstream es el repositorio 'maestro'
Origin es el repositorio de donde que esta basado en el upstream
Local repo local

#git commands

```sh
git remote add origin <remote url>
git remote add upstream <upstream_remote>
git pull upstream <branch>
```

crea un branch 

```
git branch <branch>
```

crea un branch y se pasa al branch en un solo comando
```
git checkout -b <branch_name>
```

para pasar de staged a untracked, revierte el ultimo cambio
```
git reset <file/folder>
```

para fusionar branch en otra, cambiar a la cual se va fusionar p.e. master se fusiona con branch
en master:
git merge <branch>

borra un branch siempre y cuando no estes en el branchs
```
git branch -d <branch>
```

##.gitignore

Siempre crear el archivo .gitignore antes de hacer commit

archivos especificos

- archivo.ext

ignora por archivos por extension

- *.css

excluye archivo especifico de ser ignorado

- !readme.md

ignora directorios
- dir/

ignora subdirectorios que se puedan encontrar dentro de varios subdirectorios
- **/subdir

**solo de haber un archivo gitignore en todo el proyecto**