'use strict'

const API_URL = 'http://localhost:3000';
const htmlTable = document.getElementById('tableData');
	
htmlTable.innerHTML = '<thead> <tr> <th>Key</th> <th>Value</th> </tr> </thead>';

/*
*@param jsonData:json 
*@description Tries to add data to a table if available
*/
const createTable = (jsonData) => {
	 
	if(jsonData === undefined){
		 throw 'No data from server';
	}
	
	for (const objectJson  of jsonData){
				
		let keyName = Object.keys(objectJson); 
		 
		htmlTable.innerHTML += `<tr> <td> ${keyName} </td> <td> ${objectJson[keyName]} </td> </tr>`;
	}
	
	
	
};
 
 
fetch(API_URL+'/data')
  .then((response)=> {

	if(response.status === 200 || response.status === 304){ 		
		
		response.json().then( (json) => createTable(json) );		

		}
	}
  )
  .catch((error)=> {
    throw `Fetch Error X/ : ${error}`;
  });
