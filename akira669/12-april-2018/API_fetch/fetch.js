'use strict';

const URL = 'http://localhost:8000/cuentas';
 
  fetch(URL,
     {   
        mode: 'cors',
        headers: new Headers({
          "Content-Type": "application/json",
          "Accept":"application/json"
        })
      }
  ).then( dataJSON =>  { 
    if(dataJSON.status !== 200){
      throw Error({
        type : 'ERROR',
        message : 'There is no data'
      });
    }
    dataJSON.json().then( dataJSON.json().then(object => {
      createTable(object);
    });
  }
  ).catch(function(error) {
   if(error){
    let  messegaeError ={
      message : `Unable to get URL data ${URL}, message: ${error}`
    };
   document.getElementById('error').innerText = messegaeError.message;
   }
  });  

  const createTable = (object) => {
    let tableHTML = `<table><thead><th>KEY</th><th>VALUE</th><tbody>`;
     for( let position in object){
      for(let key in object[position]){
        tableHTML += `<tr><td>${key}</td><td>${object[position][key]}</td></tr>`;
      }
     } 
    tableHTML+= `</tbody></table>`;
    document.getElementById('body-table').innerHTML = tableHTML;
  }
