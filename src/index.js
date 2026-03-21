const fs = require('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) =>{
    quebraEmParagrafos(texto);
});

function quebraEmParagrafos(texto) {
    const paragrafos = texto.toLowerCase().split('\n');
    const contagem = paragrafos.flatMap((paragrafo) => {
        if(!paragrafo) return [];
        return verificaPalavrasDuplicadas(paragrafo);
    });
    console.log(contagem);
    }
   
    function limpaPalavras(palavra) {
        return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    }

function verificaPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(' ');
    const resultado = {};

    listaPalavras.forEach(palavra => {
        if (palavra.length >= 3) { 
            const palavraLimpa = limpaPalavras(palavra);
            resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1
        }
    })
    return resultado;
}


/* IMPORTANDO O MODULO EXPRESS PARA CRIAR UM SERVIDOR WEB */
const express = require('express');
const { findPackageJSON } = require('module');

/* CRIANDO O SERVIDOR WEB */
const app = express()

/* DEFININDO A PORTA DO SERVIDOR */
const port = 3000

/* DEFININDO A ROTA PRINCIPAL DO SERVIDOR */
app.get('/', (req, res) => {
    /* ENVIANDO A QUANTIDADE DE VEZES QUE A PALAVRA "CLIENTE" APARECEU NO ARQUIVO E O CONTEÚDO DO ARQUIVO MODIFICADO PARA O NAVEGADOR */
    res.send(link + "<br>") 
})

/* INICIANDO O SERVIDOR */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
