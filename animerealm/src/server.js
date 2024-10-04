const express = require('express');
const path = require('path');
const app = express();


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



