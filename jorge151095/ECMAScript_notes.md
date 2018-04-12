
# ECMA SCRIPT 6
We use `'use strict';` to force to develop to make good practices
Ecma script is a language typed dynamical, for this reason, we change `var` for `const`
```javascript
const object = {};
```
We can create values in a object dynamical
```javascript
object.name = "name";
```
We use `const` and `let` to create an blocked ambient. And local variables
```javascript
const myfunction = () => {
    let boo = '';
}
```
A good add characteristic is the param inicialization
```javascript
const myfunction = (param = '') => {
    let boo = '';
}
```
When need a necessarily param 
```javascript
const myfunction = (param) => {
    if (param === undefined && typeof param === String){
        throw Error({
            type: 'FATAL',
            message: 'What are you doing bro?'
        });
    } else {
    }
}
```
When we have just one condition, use `if`, if we have more than 3 cases, we use `switch`
#### LOOPS
`for of` is for loops enumerable things (array, map)
`for in` is for loops with objects
```javascript
const myfunction = (param) => {
    for (let element of enumerable){
    }
}
```
### ForEach
We use forEach in array
```javascript
const array = [1,2,3,4];
const myfunction = (element) => {
}
array.forEach(element => myfunction(element));
```
### For in
We use forEach in objects

### For of
The list is an extensive one such as
-   Array
-   Map
-   Set
-   String
-   TypedArray
```javascript
for (let entry of iterable){
}
for (let [key, value] of iterable){
}
```
## Good practices
-   Camel case in var
-   Const in UPPER CASE
-   Use of simple dots

## Class
Classes are prototypes
```javascript
class MyClass {
    const functionA = () => {};
}
```
## Call
**Asynchronous call:** Call Not secuencial, i.e.
```javascript
const promise = new Promise((resolve, reject) => {
    if(user.name === 'Jorge'){
        resolve(user);
    } else {
        reject(Error('This is not Jorge'));
    }
});

promise
    .then()
    .catch();
```

## Variable sintax
nameVar = public
_nameVar = private
__nameVar = protected


## Continue, break and return
`continue` exit of the present iteration
`break` and `return` exit of the loop
```javascript
for (let iterable of array){
    if (iterable.uid === 2){
        continue;
    }
    throw Error('Not a number 2');
}
```