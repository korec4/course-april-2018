'use strict'

const API_URL = 'http://localhost:3000';
const htmlTable = document.getElementById('tableData');

	//adding the headers to the table
	
const header = htmlTable.insertRow(0);
	
const keyHeader = header.insertCell(0);
const valueHeader = header.insertCell(1);

	// Add some text to the headers:
keyHeader.innerHTML = 'Key';
valueHeader.innerHTML = 'Value';

/*
*@param jsonData:json 
*@description Tries to add data to a table if available
*/
const createTable = (jsonData) => {
	 
	if(jsonData === undefined){
		 throw 'No data from server';
	}
	
	for (let objectJson  of jsonData){
		
		
		let keyName = Object.keys(objectJson); 
		
		if(keyName == 'key_x'){
			throw 'No valid key';
        	
			continue;
		
		}  
			
		let rowTable = htmlTable.insertRow(htmlTable.rows.length);
		let keyCell = rowTable.insertCell(0);
		let valueCell = rowTable.insertCell(1);
		
		keyCell.innerHTML = Object.keys(objectJson);
		valueCell.innerHTML = objectJson[keyName];
		
	}
	
	
	
};
 
 
fetch(API_URL+'/data')
  .then(
    (response)=> {

	if(response.status === 200 || response.status === 304){ 		

			try{
				response.json().then( (json) => createTable(json) );
			}catch(errorTable){
				// @todo handle exception  
			}
		}
	}
  )
  .catch(function(error) {
    throw 'Fetch Error :-S ${error}';
  });
