'use strict';

(function IIFE(document){
    document.myObject;
    const tabla = document.querySelector('#myTable');//querychecar cuando
    const datos = { 
        key1: 'valor',
        key2: 'valor2',
        key3: 'valor3'  
    };

    //const URL = 
   /*
    fetch('datos.json')
    .then(respuesta => respuesta.json())
    .then(datos => console.log(datos.key))
    .catch(error => console.error('Hay un error'));
   */
    
    
      let finalTable = `
    <tr>
        <th>Mi Tabla</th>
    </tr>
    `;

    for ( const key in datos){
        finalTable = finalTable + `
            <tr>
                <td>
                    ${key}
                </td>
                <td>
                    ${datos[key]}
                </td>
            </tr>
        `;
    }
    tabla.innerHTML = finalTable;
})(document);
