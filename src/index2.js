/* BLIBLIOTECA FILE SYSTEM */
const fs = require('fs')

/* PEGA OS CAMINHOS DOS ARQUIVOS */
const caminho_arquivo = process.argv;

/* PEGA O LINK DO ARQUIVO */
const link = caminho_arquivo[2];


/* VERIFICA AS PALAVRAS DUPLICADAS */
function VerificarPalvrasDuplicadas(texto) {
    const resultado = {};

    texto.forEach(palavra => {
      resultado[palavra] = (resultado[palavra] || 0) + 1;
      
    });
    return resultado;
}

/* AJUSTA O TEXTO PARA REMOVER CARACTERES ESPECIAIS */
function ajustarTexto(texto) {
    const texto_ajustado = texto.map(palavra => palavra.toTitleCase().replace(/[\(\)]/g, ' ').replace(/[\n\r]+/g, ' ').replace(/\s+/g, ' ').trim());
    return texto_ajustado;
}

/* SEPARA O TEXTO EM PALAVRAS */
const texto_ajustado = ajustarTexto(fs.readFileSync(link, 'utf-8').split(' '));



const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send(fs.readFileSync(link, 'utf-8') + '----' + JSON.stringify(VerificarPalvrasDuplicadas(texto_ajustado)));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})