'use strict';

(function IIFE() {
    const URL = 'https://jsonplaceholder.typicode.com/';

    const getUsers = (response) =>{
        if(response.status !== 200){
            const message = document.getElementById('message');
            message.innerText = 'Looks like there was a problem. Status code: '+ response.status;
            return;
        }

        response.json().then((users) => {
            const message = document.getElementById('message');
            message.innerText = 'The connection is success: ' + URL;
            const tableData = document.getElementById('table');
            tableData.innerHTML = `<thead><tr><th>ID</th><th>Name</th><th>Email</th></tr></thead>`;

            for(const user of users){
                tableData.innerHTML +=  `<tr><th> ${user.id} </th><th> ${user.name} </th><th> ${user.email} </th></tr>`;
            }
        });
    };

    const getRequest = (typeObject = 'users') =>{
        fetch(URL + typeObject)
            .then(response => getUsers(response))
            .catch(function (err) {
                const message = document.getElementById('message');
                message.innerText = "Fetch Error : -S" + err;
            });
    };

    getRequest();
})();





