const fs = require('fs')

const caminho_arquivo = process.argv;
const link = caminho_arquivo[2];


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send(fs.readFileSync(link, 'utf-8'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})