const express = require("express")
const app = express()


app.get("/", (req,res) => {
    res.send("Bem vindo!!!")
})

app.get("/produtos", (req,res) => {
    res.send("Produtos!!!")
})

app.get("/clientes", (req,res) => {
    res.send("Clientes!!!")
})

app.get("/faq", (req,res) => {
    res.send("Perguntas Frequentes!!!")
})

app.listen(3000, (err) => {
    if(!err) return console.log("Servidor Iniciado!!")
    console.log(err)
})