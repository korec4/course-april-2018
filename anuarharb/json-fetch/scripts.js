(function() {
  'use strict'
  
  const table = document.querySelector('#myTable');
  const URL_API = 'datos.json';

  const fillTable = (people) => {
    let finalTable = `
      <tr>
        <th>Mi Tabla</th>
      </tr>
    `
    for(let person of people) {
      finalTable = finalTable + `
        <tr>
          <td>${person.name}</td>
          <td>${person.age}</td>
        </tr>
      `
    }
    table.innerHTML = finalTable;
  }

  fetch(URL_API)
    .then(response => response.json())
    .then(response => fillTable(response.people))
    .catch(err => alert('Fallaste como developer'));

})();
