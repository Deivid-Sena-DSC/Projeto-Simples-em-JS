
/* IMPORTANDO O MODULO FILE SYSTEM */
const fs = require('fs')

/* OBTENDO O DIRETÓRIO PRINCIPAL */
const diretorio_principal = process.cwd(__dirname)

/* OBTENDO O CAMINHO DOS ARQUIVOS */
const caminho_txt = diretorio_principal + "/arquivos"

/* OBTENDO A LISTA DE ARQUIVOS NO DIRETÓRIO */
const arquivos_do_diretorio = fs.readdirSync(caminho_txt)   

/* FAZENDO UM FOR PARA VERIFICAR SE A QUANTIDADE DE ARQUIVOS É MAIOR QUE 0 */
for (let i = 0; i < arquivos_do_diretorio.length; i++) {

    /* VERIFICANDO SE O ARQUIVO TERMINA COM .TXT */
    if (arquivos_do_diretorio[i].endsWith('.txt')) {

        /* ABRINDO O ARQUIVO */
        arquivo_txt = fs.readFileSync(caminho_txt + "/" + arquivos_do_diretorio[i], 'UTF-8')}}

/* DIVIDINDO O CONTEÚDO DO ARQUIVO EM UM VETOR DE PALAVRAS */
arquivo_txt = arquivo_txt.split(' ')


/* VARIÁVEL PARA CONTAR A QUANTIDADE DE VEZES QUE A PALAVRA "CLIENTE" APARECE NO ARQUIVO */
var palavras = 0;

/* FAZENDO UM FOR PARA VERIFICAR CADA PALAVRA DO ARQUIVO */
for (let i = 0; i < arquivo_txt.length; i++) {

    /* TRANSFORMANDO AS PALAVRAS EM MAIÚSCULAS PARA VER SE É IGUAL A "CLIENTE" */
    arquivo_txt[i] = arquivo_txt[i].toUpperCase()
    if (arquivo_txt[i] == 'CLIENTE') {
        palavras++
    }
    
}

/* TRANSFORMANDO O VETOR DE PALAVRAS EM UMA STRING PARA PODER ESCREVER NO ARQUIVO */
arquivo_txt = arquivo_txt.join(' ')


/* ESCREVENDO O CONTEÚDO MODIFICADO NO ARQUIVO */
fs.writeFileSync("arquivo_modificado.txt", arquivo_txt, 'UTF-8')

console.log("A palavra 'CLIENTE' apareceu " + palavras + " vezes no arquivo.")

/* IMPORTANDO O MODULO EXPRESS PARA CRIAR UM SERVIDOR WEB */
const express = require('express')

/* CRIANDO O SERVIDOR WEB */
const app = express()

/* DEFININDO A PORTA DO SERVIDOR */
const port = 3000

/* DEFININDO A ROTA PRINCIPAL DO SERVIDOR */
app.get('/', (req, res) => {
    /* ENVIANDO A QUANTIDADE DE VEZES QUE A PALAVRA "CLIENTE" APARECEU NO ARQUIVO E O CONTEÚDO DO ARQUIVO MODIFICADO PARA O NAVEGADOR */
    res.send(palavras.toString() + '\n' + '\n' + arquivo_txt)
})

/* INICIANDO O SERVIDOR */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})