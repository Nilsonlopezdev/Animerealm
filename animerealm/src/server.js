const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());

// aparecer en archivo index
app.use(express.static(path.join(__dirname, '../public'))); 



app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});

app.get("/", (req, res)=> res.sendFile(__dirname + "/public/contenidos/login,html"))
app.get("/", (req, res)=> res.sendFile(__dirname + "/public/contenidos/registro.html"))