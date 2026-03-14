
/* IMPORTANDO O MODULO FILE SYSTEM */
const fs = require('fs')

/* OBTENDO O DIRETÓRIO PRINCIPAL */
const diretorio_principal = process.cwd(__dirname)

/* OBTENDO O CAMINHO DOS ARQUIVOS */
const caminho_txt = diretorio_principal + "/arquivos"

/* OBTENDO A LISTA DE ARQUIVOS NO DIRETÓRIO */
const arquivos_do_diretorio = fs.readdirSync(caminho_txt)   

for (let i = 0; i < arquivos_do_diretorio.length; i++) {
    if (arquivos_do_diretorio[i].endsWith('.txt')) {
        arquivo_txt = fs.readFileSync(caminho_txt + "/" + arquivos_do_diretorio[i], 'UTF-8')}}


arquivo_txt = arquivo_txt.split(' ')

console.log(arquivo_txt)


var palavras = 0;

for (let i = 0; i < arquivo_txt.length; i++) {
    arquivo_txt[i] = arquivo_txt[i].toUpperCase()
    if (arquivo_txt[i] == 'CLIENTE') {
        palavras++
    }
    
}

arquivo_txt = arquivo_txt.join(' ')

fs.writeFileSync("arquivo_modificado.txt", arquivo_txt, 'UTF-8')

console.log(palavras + '  ' + arquivo_txt)

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send(palavras.toString() + ' ' + ' ' + arquivo_txt)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})