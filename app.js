const express = require("express")
const path = require("path")
const app = express();


//Asi creo la variable para poder hacer que la carpeta sea publica.



//Asi hago que la carpeta sea publica.
app.use(express.static(path.join(__dirname, "/public")))
//Asi envio un archivo HTML.
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/home.html"));
})


//ruta del servidor
app.listen(3000,()=>console.log("Esto anda"))


//Asi envio un texto HTML.
/*app.get("/", (req,res)=>{
    res.send("texto que quiera enviar")
})*/

