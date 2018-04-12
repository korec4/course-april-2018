'use strict'
const url = 'http://localhost:3000/employees';
var table = "<table>";
table += "<tr>";
table += "<th>Key</th>";
table += "<th>Value</th>";
table += "</tr>";
fetch(url)
    .then(
        function(response) {
            if (response.status !== 200) {
                throw Error ('Looks like there was a problem. Status Code: ' + response.status);
                return;
            }

            // Examine the text in the response
            response.json().then(function(data) {
            for (const object in data){
                for (const keys of Object.keys(data[object])){
                    table += "<tr>";
                    table += "<td>"+keys+"</td>";
                    table += "<td>"+data[object][keys]+"</td>";
                    table += "</tr>";
                }
            }
            table += "</table>";
            document.getElementById("table").innerHTML = table;
        });
        }
    )
    .catch(function(error) {
        throw Error ('Fetch Error: ', error);
    });

