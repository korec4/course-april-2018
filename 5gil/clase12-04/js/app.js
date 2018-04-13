'use strict';
const URL = '../db.json';
const URL_API= 'http://localhost:3000/homework';

/**
 * @description function to validate if the answer is correct, once connected
 * @param response
 */    
const status = (response) => {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(new Error(response.statusText))
    }
  }

/**
 * @description turns the answer in json
 * @param response
 */   
const json = (response) => {
   return response.json()
}


 fetch(URL_API, {
    method: 'GET',
    headers: {
      "Content-type": "charset=UTF-8"
    }
  })
    .then(status)
    .then(json)
    .then((data) => {
        let html = '';
        for (const task of data){
            for(const detail in task){
              html += `<tr><td>${detail}</td><td>${task[detail]}</td></tr>`;
              document.getElementById('homeworkTable').innerHTML = html;
            }
        }
    }).catch((error) => {
      let errorHtml = '';
     errorHtml += `%${error.name}-${error.message}%`;
     document.getElementById('homeworkTable').innerHTML = errorHtml;
    });           
