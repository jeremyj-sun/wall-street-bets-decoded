'use strict';

const Hapi = require('@hapi/hapi');
const fetch = require("node-fetch");

const init = async () => {

    const server = Hapi.server({
        port: 5000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/api/gains',
        handler: (request, h) => {
            return fetch('https://www.reddit.com/r/wallstreetbets/hot.json?limit=20')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                return data
            })
            .catch(err => console.log(err));
        }
    })

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();