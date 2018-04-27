# TDD

- 1 pensar en pruebas unitarias que garantizen funcionalidad
- 2 escribir el codigo minimo necesario
- 3 refactorizar

Jest
sinon

## Objetos simulados

- dummy: codigo hardcodeado/en duro, son datos de comparacion de assertions y de parametros.
```js
const dummy = {
	error:'warn',
	message:'some warning'
}
```
- mocks: instancias con caracteristicas de pruebas de un objeto en particular
```js
const db = require('moongose');
const mock = sinon.mock(db);
```
- spies: llamadas a funciones
```js
				//objeto - función
const spy = sinon.spy(db, 'short');
spy.calledOnce
```
- stubs: manejo de las funciones
```js
const stub = sinon.stub(db,'short').callsFake(()=>{return 5;});
```

stub y spy, siempre usar la funcione .restore para cada caso de prueba, en mock es verify
para limpiar datos 