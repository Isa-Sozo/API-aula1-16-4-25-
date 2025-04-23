const express = require('express')// importar modulo express do npm

const app = express()// inicializar o servidor express e salvar variavel app
const PORT = 8000 // separa uma porta para rodar o servidor
app.use(express.json())//fala para o servidor que vai receber dados em JSON

const bancodeDados = [
    {
        id:1,
        titulo:"desenvolvimento de sistemas",
        curso: "tecnico em desenvolvimento de sistemas",
        turma: "3B",
        professor:"Ramon"
    }
]
//criar as minhas rotas
app.get('/aulas', (req,res) => {
    res.status(200).send(bancodeDados)
})

app.get('/aulas/:id', (req,res)=>{
    console.log(req.params.id)
    res.send('qualquercoisa')
})

app.post('/aulas', (req, res) => {
    const dados = req.body
    dados['id'] = bancodeDados.length + 1
    bancodeDados.push(dados)
    res.status(201).send(dados)
})

app.put('/aulas/:id',(req,res)=>{
    //pegar o id da rota
    const id = req.params.id
    console.log(id)
    //procurar o id do array
    const usuario = bancodeDados.find(user => user.id == id)
    if(!usuario){
        res.status(404).json({msg:"Usuario não encontrado"})
    }
    //modificar os campos
    //atualizar array
    res.send('ok')
})

app.delete('/aulas/:id', (req,res)=>{
    const id = req.params.id
    console.log(id)
    const userIndex = bancodeDados.findIndex(user => user.id == id)
    if(!userIndex === -1){
        res.status(404).json({msg:"Usuario não encontrado"})
    }
    bancodeDados.splice(userIndex, 1)
    res.status(204).send()
})

app.listen(PORT, () => {console.log('servidor online')})//coloca o servidor para ouvir na porta e colocar mensagem
//depois disso instalar o npm i nodemon e ir no package.json e adicionar virgula depois de text e embaixo de test o "start": "nodemon index.js"
