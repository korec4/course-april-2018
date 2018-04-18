'use strict';
 
const URL = '/assets/js/heroes.json';

document.getElementById( 'btn-json' ).addEventListener( 'click', loadJson );

function loadJson() {
  fetch( URL )
    .then( function( response ) {
      return response .json();
    })
    .then( function( data ) {
      let html = ''; 
      data.forEach( function( data ) {
        html += `
              <tr>
                <td>${ data.id }</td>
                <td>${ data.name }</td>
                <td>${ data.location }</td>
              </tr>
        `;
      })
      document.getElementById( 'table-content' ).innerHTML = html;
    })
    .catch( ( error ) => console.error( error ) );
} 