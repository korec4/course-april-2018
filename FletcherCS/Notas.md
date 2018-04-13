# Notas del tercer día (12/04/2018)
### Frase del día
> Si no saben para que sirve algo, no lo pongan, o bueno, esa no es la idea, investigenlo y si no les sirve quitenlo

## Aprendizaje del día de hoy

 - ***i18n***
    - Se refiere a la internacionalización
 - Sólo existe un *.gitignore* para todo el equipo
 - Ya no debe existir *function* para ello usaremos las *arrow function*
 - HTML5
    - Uso correcto de *table*
        ```HTML
            <table>
                <thead>Head</thead>
                <tbody>Body</tbody>
                <tfoot>Footer</tfoot>
            </table>
        ```
 - Evitar el uso anidado de *for*
 - Uso de *const* dentro de un for
    - Podemos hacer uso de *conts* dentro de un for siempre y cuando este sea un *for-of* o *for-in*
 - El uso de *querySelector*
    - Podemos hacer uso de *querySelector* cuando no sea posible etiquetar todas las instancias de un nodo
- DOM
    - Al querer cambiar un objeto la etiqueta <javascript> debe ir al final de la etiqueta </body> para que se pueda cargar todo el template
***
# Notas del segundo día del curso (11/04/2018)
### Frase del día
> No hagan uso de console.log para nada
### Datos curiosos de Javascript

 - Javascript **no** es orientado a objetos  es orientado a prototipos
 - [Ecmascript 6](http://www.ecma-international.org/ecma-262/6.0/)  (2015) trajo consigo enormes cambios en algunas secciones, es uno de los más estables. 
 
### Nuevos cambios de javascript con ES6
 
 - Todas las variables (*var*) son renombradas con *const* o *let* según convenga, pero es altamente recomendado hacer uso de *const* siempre.
 
 - Se deja de ocupar la palabra reservada *function* y es representada ahora por una *arrow function* =>
  
  - De ser necesario se pueden declarar valores por defecto de los parametros dentro de una función.

 - El uso de *forEach* quedará en desuso y de hecho no se recomeinda hacer uso de él por más tiempo.
 
 - Se introduce el uso de las funciones *asincronas* así como las *promises*
 
### Convenciones para el uso correcto de **ES6**

 1. Uso de la linea *use stric* va al inicio del archivo
 2. Uso de *swich* cuando tengamos un *if* de más de 3 opciones.
 3. Uso correcto del operador ternario *if*
    ```Javascript 
        <expression> ? <function> : <function>
    ```
4. Deshuso de *forEach* y remplazarlo por ***for-of***
5. Uso de ***for-in*** únicamente para los objetos
6. Todas las funciones son declaradas con **const**
7. El uso correcto del ***throw***
     ```Javascript 
        throw Error({
            type:'FATAL',
            message: 'A message explain an error'
        });
    ```
8. El uso correcto de un *destructuring* en *maps*
     ```Javascript 
        for (let [key, value] of iterable) {
            @todo something about the data retrive
        }
    ```
 
 ### Funciones ***asíncronas***
 
```Javascript
	const promise = new Promise ( (resolve,reject) => {
    	if(user.name === 'Abraham'){
    		resolve(user);
    	}else{
    		reject(Error =>{
				throw Error({
					type: 'FATAL',
					message: 'Message of the error'
				});	
			});
    	}
	});
```
### **Para resolver o rechazar una promesa se hace uso de:**
- ***.then()*** cuando la promesa se resuelve
- ***.catch()*** cuando la promesa fue rechazada

### Buenas prácticas

Para las buenas prácticas durante este curso se hará uso de las siguientes reglas
 1. Uso obligatorio de ***use strict***
 2. Uso de llaves (*{}*) y punto y coma (*;*) obligatorio
 3. Uso de **camelCase** para funciones y variables
 4. Todas las constantes van en *Uppercase*
 5. **No** está permitido hacer uso de comillas dobles (*" "*)
 6. Las clases inician con Mayúsculas
 7. **No** esta permitido usar *console.log()*, en su lugar hacer uso de **breakpoints** o **debugger**
 8. **Nada** de código muerto
 9. Tener todo documentado en **inglés**, así como el nombre de las variables, constantes, funciones, documentación
 4. Documentar el código de manera correcta, de esta forma:
```Javascript
    /*
    * @param param: String
    * @description This is a description
    * 
    */
```



***

# Notas del primer día del curso de Polymer (10/04/2018)

Las cosas que he hecho hoy son:

 - Recibir mi computadora para trabajar
 - Presentarme
 - Pasar lista

Los temas que he aprendido  hoy:
  - Uso avanzado de **git**
  - Uso correcto del **Markdown**
  - Herramientas/Páginas para resolver problemas de **Javascript Ecmascript 6**

### Git

Los comandos más usados han sido:

```sh
$ git init
$ git clone
$ git add
$ git commit
$ git push
$ git remote add
$ git pull
```

### Una breve explicacion sobre estos comandos mas usados

| Comando | Breve explicacion|
| ------ | ------|
| git init | Inicia git en nuestra carpeta |
| git clone | Hace una copia exacta de un repositorio |
| git add | Agrega o anade archivos o carpetas para su posterior commit |
| git commit | Hace un commit de los archivos que hemos agregado |
| git push | Sube al repositorio los archivos que estaban en commit |
| git remote add | Agrega un repositorio para poder extraer datos de él pero no para enviar |
| git pull | Extrae de un repositorio remoto los cambios que no están presentes en el repositorio local |
