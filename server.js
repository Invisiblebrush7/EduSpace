'use strict';
const express = require('express');
const router = require('./app/routes/router');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const cors = require('cors');
const { MONGO_URI } = require('./config');

const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
	console.log('Se recibio request a: ', req.url)
	console.log('body: ', req.body)
	next()
})

app.use(express.json()); // Use express body-parser to parse all request bodies

// Connect to mongoose
mongoose
	.connect(MONGO_URI)
	.then(() => console.log('MongoDB conected'))
	.catch((err) => console.log(err));



// app.use('/public', express.static(__dirname + '/app/public'));
// req es lo que pide el cliente
// res es lo que enviamos

// app.get('/', (req, res) => {
// 	res.sendFile('home.html', { root: './app/views' });
// });

// app.get('/materias', (req, res) => {
// 	res.sendFile('courses.html', { root: './app/views' });
// });

// app.get('/profesores', (req, res) => {
// 	res.sendFile('teachers.html', { root: './app/views' });
// });

// app.get('/agregar_materia', (req, res) => {
// 	res.sendFile('add_subject.html', { root: './app/views' });
// });
// app.get('/agregar_profesor', (req, res) => {
// 	res.sendFile('add_teacher.html', { root: './app/views' });
// });

app.use((req, res, next) => {
	console.log(`Request: [${req.method}] ${req.url}`)
	next()
}); // Use the file of router to get routes
app.use(router); // Use the file of router to get routes

app.use(express.static('app/views'));


app.listen(port, () => { });
