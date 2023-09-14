const express = require("express");
const app = express();
const port = 8080;

const ensamblaje = (req,res,next) => {
    console.log("Ensamblando la computadora");
    next()
}

const instalando = (req,res,next) =>{
    console.log("Instalando sistema operativo");
    next()
}

const recuperando = (req,res,next) =>{
    console.log("Recuperando Backup");
    next()
}

const driver = (req,res,next) =>{
    console.log("Instalando Controladores");
    next()
}

app.get("/ejecutar", ensamblaje, instalando, recuperando, driver, (req, res) => {
    console.log("Computadora lista para usar");
    res.send("Ya puedes jugar en tu computadora");
});

app.listen(port, () =>{
    console.log(`Servidor ejecutandose en el puerto http://localhost:${port}`);
});