const express = require("express")
const app= new express()

app.use(express.json());

app.get("/", (req,res) =>{
    res.send({
        message: "hey there"
    })
})

app.listen("3000");