const express = require("express")
const app= new express()
const {UserModel, TodoModel} = require("./db")

const {auth, JWT_SECRET} = require("./auth")

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/")

app.use(express.json());

app.get("/", (req,res) =>{
    res.send({
        message: "Backend is Running"
    })
})

app.post("/signup", async(req,res) =>{
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    
    await UserModel.create({
        email: email,
        password: password,
        name: name
    })

    res.send({
        message: "Signup successful"
    })
})

app.post("/signin", async (req, res) =>{
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email,
        password: password
    })

    if (response){
        const token= jwt.sign({
            id: response._id.toString()
        })

        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect credential"
        })
    }

})

app.post("/todo", (req, res) =>{

})

app.get("/todos", (req, res)=>{

})

app.listen("3000");