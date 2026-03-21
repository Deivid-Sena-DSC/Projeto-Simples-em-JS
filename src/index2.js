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
    const texto_ajustado = texto.flatMap(palavra => palavra.toUpperCase().replace(/[\(\)]/g, ' ').replace(/[\n\r.,]+/g, ' ').replace(/\s+/g, ' ').trim());
    return texto_ajustado;
}


/* SEPARA O TEXTO EM PALAVRAS */
var texto_ajustado = ajustarTexto(fs.readFileSync(link, 'utf-8').split(' '));
const contagem_palavras = VerificarPalvrasDuplicadas(texto_ajustado)


/* LISTA COM A PALAVRAS CONTADAS E SUA QUANTIDADE */
const texto = [] 
for (const [chave, valor] of Object.entries(contagem_palavras))
  texto.push(chave + " " + valor)





const express = require('express');
const { off } = require('cluster');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const conteudo = fs.readFileSync(link, 'utf-8') + '<br>' + texto.join('<br>'+'<br>');
  res.send(conteudo);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})