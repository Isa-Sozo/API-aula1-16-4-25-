const fs = require('fs')

//ler arquivo
fs.readFile('./teste.txt', 'utf-8', (err, data)=>{
    console.log(data)
})
//escrever em um arquivo
//deletar
