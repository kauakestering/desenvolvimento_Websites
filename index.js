const { application } = require("express")
const express = require("express")
const app = express()
const path = require("path")
const caminhoBase = path.join(__dirname, "templates")

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())



app.post('/cadastrar/salvar', (requisicao, resposta) => {
    const nome = requisicao.body.nome
    const email = requisicao.body.email
    const senha = requisicao.body.senha
    console.log(requisicao.body)
})




app.get('/cadastrar', (requisicao, resposta) => {
    resposta.sendFile(`${caminhoBase}/cadastro.html`)
    
})



app.get('/usuarios/:id', (requisicao, resposta) =>{
    resposta.sendFile(`${caminhoBase}/usuarios.html`)
    const id = requisicao.params.id
})

app.get('/', (requisicao, resposta) => {
    resposta.sendFile(`${caminhoBase}/index.html`)
    
})

app.listen(3000, () => {
    console.log("fuynfou")
})