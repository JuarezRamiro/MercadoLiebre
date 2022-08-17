const express = require("express");
const path = require("path");
const app = express();
app.listen(3000,() => {
    console.log("servidor corriendo en el puerto 3000");
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"));
   // res.sendFile("./views/home.html");
   console.log(path.join(__dirname, "/views/home.html"));
})
