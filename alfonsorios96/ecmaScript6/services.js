'use strict';

const fs = require('fs');

let language_key = 'es';

/**
 * @description Gets the keys in a language
 * @param request
 * @param response
 */
const mapLanguages = (request, response) => {
    fs.readFile(`locales/${language_key}.json`, 'utf8', (error, data) => {
        if (error) {
            response
                .status(500)
                .send({
                    code: 'LANG001',
                    type: 'FATAL',
                    message: 'Language not found'
                });
        }

        response
            .status(200)
            .send(JSON.parse(data));
    });
};

module.exports = {mapLanguages};
