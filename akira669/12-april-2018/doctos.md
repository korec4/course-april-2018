# Actividad 1
> Levantar un servidor que a través de un endpoint Ej http://localhost:8000/data sirvan el json de las palabras.
> Realizar la petición fetch al data.json desde el <script> de html y parsear la información.

### CRITERIOS DE ACEPTACIÓN.
- Controlar errores.
- Validar 
- ES6 
- Use Strict
- Versionar en el fork.

### AYUDA
> Introduction to fetch()
	(https://developers.google.com/web/updates/2015/03/introduction-to-fetch)

> Create A REST API With JSON Server
	(https://medium.com/codingthesmartway-com-blog/create-a-rest-api-with-json-server-36da8680136d)

### Librerias 
> chalck => colores bonitos en consola
> cors => dominios para limitaciones (midelware)
> express => 
> body-parse => cada vez que reciba peticiones, estandariza que sea
	json (midelware)

# Paso 1 => Creacion de JSON-SERVER

> 1.- Instalar nodeJS

> 2.- verificar version de nodeJS y npm
```sh
$ node -v
$npm -v
```

> 3.- instalar json-server
- -g => De forma global la instslacion
```sh
$ npm install -g json-server
```

> 4.- crear archivo JSON
```
{
	"cuentas" : [
		{
			"claveUser" : "1001",
			"nombreUser" : "Adolfo",
			"aPaternoUser" : "Posadas",
			"emailUser" : "akirauchiha0@gmail.com"
		},
		{
			"claveUser" : "1002",
			"nombreUser" : "Guillermo",
			"aPaternoUser" : "Gonzalez",
			"emailUser" : "memo.Gon@gmail.com"	
		},
		{
			"claveUser" : "1003",
			"nombreUser" : "Javier",
			"aPaternoUser" : "Guzman",
			"emailUser" : "super_javi@gmail.com"
		}
	]
}
``` 

> 5.- Run json-server
- --port => numero de puerto (opcional), por default es 3000
```sh
$ json-server --watch <nombreArchivoJSON> --port 8000
```

> 6.- Ir a tu navegador y colocra en la URL => localhost:8000/cuentas

### Vualaaaaa SERVER-JSON runing 

# Paso 2 => tabla html del JSON
>  creacion del script para lectura de JSON (ver archivo fetch.js);
