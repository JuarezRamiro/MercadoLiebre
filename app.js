let express = require("express")
let app = express();
app.listen(3000,()=>console.log("Esto anda"))

app.get("/home", function(req, res){
    res.send("bienvenidos al sitio");
})
