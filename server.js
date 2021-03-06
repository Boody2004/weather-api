/*eslint-disable*/
const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use('/', serveStatic(path.join(__dirname, '/')));

app.get("/apiKey", (req, res) => {
    res.send({
        apiKey: process.env.API_KEY
    })
});

app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port);
console.log(`app is running on: http://localhost:${port}`);
