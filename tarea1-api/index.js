const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({
        nombre: "Pedro Luis Avila Gómez",
        cancion: "FABULOSA - PIAVI "
    });
});

app.listen(3000, () => {
    console.log("Servidor en puerto 3000");
});