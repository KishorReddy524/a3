const express= require("express")
const app= express.Router()

app.get('/harryporter',async (req,res )=>{
    res.send("harryporter")
})
 

app.get('/kingkong',async (req,res )=>{
    res.send("kingkong")
})
 

app.get('/andrain',async (req,res )=>{
    res.send("andrain")
});
module.exports=app;