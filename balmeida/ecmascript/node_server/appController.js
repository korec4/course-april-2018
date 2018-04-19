'use strict';

const fs = require('fs');
 
/**
 * @description Gets the data from json file
 */
const sendData = (request, response) => {
    fs.readFile(`model/data.json`, 'utf8', (error, data) => {
        if (error) {
            response
                .status(500)
                .send({
                    code: '001',
                    type: 'FATAL',
                    message: 'File not found'
                });
        }

        response
            .status(200)
            .send(JSON.parse(data));
    });
};

module.exports = {sendData};
