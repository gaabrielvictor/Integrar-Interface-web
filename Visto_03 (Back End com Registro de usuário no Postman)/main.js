require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Conectar ao banco de dados
const databaseUrl = process.env.URL_BANCO_DE_DADOS;

mongoose
  .connect(databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // Timeout para seleção de servidor
    family: 4, // Força o uso do IPv4
  })
  .then(() => {
    console.log('Conectado ao banco de dados com sucesso!');
    const porta = process.env.PORTA_SERVIDOR || 5000;
    app.listen(porta, () => {
      console.log(`O servidor está no ar em http://localhost:${porta}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
  });

// Roteadores
app.use('/produtos', require('./controllers/produto_controller'));
app.use('/postagens', require('./controllers/postagem_controller'));


