'use strict'

let htmlTable = document.getElementById('tableData');

	//adding the headers to the table
	
let header = htmlTable.insertRow(0);
	
var keyHeader = header.insertCell(0);
var valueHeader = header.insertCell(1);

	// Add some text to the headers:
keyHeader.innerHTML = "Key";
valueHeader.innerHTML = "Value";

/*
*@param jsonData:json 
*@description Tries to add data to a table if available
*/
const createTable = (jsonData) => {
	 
	if(jsonData === undefined){
		 throw Error({
            type :'FATAL',
            message:'No data from server'
        });
	}
	
	for (let objectJson  of jsonData){
		
		
		let keyName = Object.keys(objectJson); 
		
		if(keyName == 'key_x'){
			throw Error({
            type :'WARN',
            message:'No valid key'
        });
			
			continue;
		
		}  
			
		let rowTable = htmlTable.insertRow(htmlTable.rows.length);
		let keyCell = rowTable.insertCell(0);
		let valueCell = rowTable.insertCell(1);
		
		keyCell.innerHTML = Object.keys(objectJson);
		valueCell.innerHTML = objectJson[keyName];
		
	}
	
	
	
};
 
 
fetch('http://localhost:3000/data')
  .then(
    (response)=> {

	if(response.status === 200 || response.status === 304){ 		

			try{
				response.json().then( (json) => createTable(json) );
			}catch(errorTable){
				
			}
		}
	}
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
