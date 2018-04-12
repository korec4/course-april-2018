'use strict'; //es obligatorio

const URL = 'http://my-site:8090'; //las variables const son ahuevo mayusculas 

const object = {}; //declaracion de objeto en ecmascrip6

//uso de comilla simple de buena practica de javascript 

/*
* @param param :string 
* @description this is an user's name
*/
const myfunction = (params='') => {  //evitar errores 
	/*if(param === undefined && typeof parram === String){
		throw Error({
			type: 'FATAL',
			message: 'mal mal mal'
		});
	}*/	
	//let boo= '';  //let solo funciona en el bloque 
	//const boo = '';

	for(let element of enumerable){
	//servir para ir iterando en cosas enumeralbles que en protopito del objeto array, map set, 
	//object no es enumerable
	}



}

const array = [1,2,3,4]; //declaracion de varibles enteras (nombre)
array.forEach(element => myfunction(element)); //standar ecmascript6

/*
* clases
*/

class myClass {
	//this.name = ''; //esto esta mal 
	functionClass = () => {

 	};
}

/*
* asincrono and sincrono
*/
console.log('a');
const promise = new Promise((resolve,reject)=>{
	if (name === 'Adolfo'){
		resolver(name);

	}else{
		reject(Error('Thia not Adolfo'));
	}
});

promise
	.then()
	.catch();

console.log('b');

