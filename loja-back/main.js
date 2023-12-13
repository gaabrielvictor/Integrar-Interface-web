require('dotenv').config(); 

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const databaseUrl = process.env.URL_BANCO_DE_DADOS;

mongoose
  .connect(databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, 
    family: 4, 
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




app.use('/produtos', require('./controllers/produto_controller'));
app.use('/postagens', require('./controllers/postagem_controller'));