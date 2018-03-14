const express = require('express');
const morgan = require('morgan');

const server = express();
server.use(morgan('combined'));
server.use(express.json());

server.post('/band', (req, res) => {
    res.send(req.body);
});

server.get('/', (req, res) => {
    res.json('Whats up');
})

module.exports = server;