'use strict';

(function IIFE(document){
    
    document.myObject;
    const tabla = document.querySelector('#myTable');
    const URL_API = 'datos.json';
   
    fetch(URL_API)
    .then(response => response.json())
    .then(response => fillTable(response.data))
    .catch(error => console.error('Hay un error'));
   
    const fillTable = (data) => {
        let finalTable = `
        <tr>
            <th>Mi Tabla</th>
        </tr>
        `;
        console.log(data);
        for ( const object of data){
            finalTable = finalTable + `
                <tr>
                    <td>
                        ${object.nombre}
                    </td>
                    <td>
                        ${object.mascota}
                    </td>
                </tr>
            `;
        }
        tabla.innerHTML = finalTable;
    }
})(document);
