'use strict';

const URL = 'http://localhost:3000/employees';
let table = `<table>
                <tr>
                    <th>Key</th>
                    <th>Value</th>
                </tr>`;

/**
 * @description Gets the keys and values to set in table
 * @param response
 */
const getTable = (response) => {
    if (response.status !== 200) {
        throw Error ('Looks like there was a problem. Status Code: ' + response.status);
        return;
    }

    response.json().then( (data) => { 
    for (const object of data){
        for (const key in object){
            table += `<tr>
                    <td>${key}</td>
                    <td>${object[key]}</td>
                    </tr>`;
        }
    }
    table += '</table>';
    document.getElementById('table').innerHTML = table;
    });
};

fetch(URL)
    .then( response => getTable(response))
    .catch((error) => {
        throw Error ('Fetch Error: ', error);
    });

