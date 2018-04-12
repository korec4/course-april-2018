#ecmaScript 6 

- declarar variables const o let (si es variable), let solo vive dentro del bloque

### Ligas de interes

- documentación de ecmaScript6 mozillla [EcmaScript6].
- blog de como utilizar los doferentes for [[TypeFor]
- libreria para trabajar con array's [Lodash].
- libreria para trabajar por fechas [Moment].

- forEach exclusivamente de los array (no tan optimo, mejor forOf).
- forIn exclusivamente para object, si queremos posiciones podemos utilizarlo en un array.
- forOf , cosas iterables, array, map, set, string, TypedArray (cosas enumerables).

### Buenas Practicas

- comillas simples.
- camel case
- constantes globales mayusculas ejemplo: URL_NAME
- clases inician con mayuscula y camel case.
- comentar funciones 
- promise .then() = cuando resolvio la promesa .catch() = cuando no resolvoi la promesa
- _ en una funcion privada
- __ es una funcion protegida 
- return rompe el ciclo y regresa lo de return 
- continue ya evaluamos pero queremos que continue
- break rompe el ciclo

[EcmaScript6]: <https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Conditional_Operator>

[TypeFor]:
<https://codeburst.io/foreach-vs-for-of-vs-for-in-tug-of-for-d8f935396648>
[Lodash]: <https://lodash.com>
[Moment]: <https://momentjs.com>