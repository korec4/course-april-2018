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
            message.innerText = 'the connection is success!';
            const tableData = document.getElementById('table');

            for(const user of users){
                tableData.innerHTML +=  `<div><span> ${user.id} - </span><span> ${user.name} </span><span> ${user.email} </span></div>`;
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





