'use strict';

(function IIFE() {
    const URL = 'https://jsonplaceholder.typicode.com/';

    //message of welcome to the user
    document.getElementById('selectMessage').innerHTML = `<span>Select a item to look:</span><br>`;

    /**
     * This nethod validate a response if not code 200 write on message and return a null
     * @param response
     * @returns {response|null}
     */
    const validateResponse = (response) => {
        if (response.status !== 200) {
            const message = document.getElementById('message');
            message.innerText = 'Looks like there was a problem. Status code: ' + response.status;
            return;
        }
        return response;
    };

    /**
     * This method return a table HTML to view the data
     * @param response
     */
    const getUsers = (response) => {

        validateResponse(response);

        response.json().then((users) => {
            const message = document.getElementById('message');
            message.innerText = 'The connection is success: ' + URL;
            const tableData = document.getElementById('table');
            tableData.innerHTML = `<thead><tr><th>ID</th><th>Name</th><th>Email</th></tr></thead>`;

            for (const user of users) {
                tableData.innerHTML += `<tr><th> ${user.id} </th><th> ${user.name} </th><th> ${user.email} </th></tr>`;
            }
        });
    };

    /**
     * This method require a typeResquest to request at api
     * @param typeRequest
     */
    const getRequest = (typeRequest = 'users') => {
        fetch
        (URL + typeRequest)
            .then(response => getUsers(response))
            .catch(function (error) {
                document.getElementById('message').innerText = "Fetch Error : -S" + error;
            });
    };
    getRequest();
})();





