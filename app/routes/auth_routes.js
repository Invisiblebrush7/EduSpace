'use strict';

const express = require('express');
const router = express.Router();

router.post('/register', async(req, res) => {
    try {
        console.log('hello');
        const { username, password } = req.body;
        console.log(password);
        const Student = new Student({ username, password });

        const newStudent = await Student.save()

        //Utileria que genere el token 
        const token = "1212311223311233131223132132"

        res.json({ token: token });
    } catch (e) {

        res.status(400).json({ error: e, message: 'Hubo un pex' });
    }
});

router.post('/authenticate', (req, res) => {
    const { username, password } = req.body;

    const student = new Student({ username, password });
    if (!student) return res.status(403).json({ message: 'Usuario o contraseña incorrecta' })

    //Utileria que genere el token 
    const token = "1212311223311233131223132132" // JWT json Web Tokens 
    res.json({ token: token });




    // Student.findOne({ username }, (err, user) => {
    //     if (err) {
    //         res.status(500).send("Error al autenticar Student");
    //     } else if (!Student) {
    //         res.status(200).send("Student no existe");
    //     } else {
    //         Student.isCorrectPassword(password, (err, result) => {
    //             if (err) {
    //                 res.status(500).send("Error al autenticar Student");
    //             } else if (result) {
    //                 res.status(200).send("Student auntenticado");
    //             } else {
    //                 res.status(200).send("Ususario y/o constraseña incorrecta");
    //             }
    //         });
    //     }

    // });
})