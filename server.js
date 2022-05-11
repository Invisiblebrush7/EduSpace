'use strict';
const express = require('express');
const router = require('./app/controllers/router');

const app = express();
const port = 3000;

app.use(express.json()); // Use express body-parser to parse all request bodies
app.use('/', router); // Use the file of router to get routes
// app.use('/public', express.static(__dirname + '/app/public'));
app.use('/', express.static(__dirname + '/app/'));
// req es lo que pide el cliente
// res es lo que enviamos

app.get('/', (req, res) => {
	res.sendFile('home.html', { root: './app/views' });
});
app.get('/profesores', (req, res) => {
	res.sendFile('index.html', { root: './app/views' });
});

app.listen(port, () => {});
