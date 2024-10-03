const express = require('express');
const path = require('path');
const app = express();
import {metodos as autenticador} from './controllers/usercontrollers.js';

app.use(express.static(path.join(__dirname, '../public')));



app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});


app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/contenidos/login.html'));
});


app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/contenidos/registro.html'));
});


app.post('/api/registro', autenticador.registro)

app.post('/api/login', autenticador.login)
