const express = require('express');
const router = express.Router();
const Postagem = require('../models/postagem');

router.get('/', async (req, res) => { // LISTA TODOS
  res.json(await Postagem.find());
});

router.get('/:id', async (req, res) => { // LISTA 1 PELO ID
  res.json(await Postagem.findById(req.params.id));
});

router.post('/', async (req, res) => { // CADASTRA
  res.json(await new Postagem(req.body).save());
});

router.put('/:id', async (req, res) => { // ALTERAR 1 PELO ID
  res.json(await Postagem.findByIdAndUpdate(req.params.id, req.body));
});

router.delete('/:id', async (req, res) => { // APAGAR 1 PELO ID
  res.json(await Postagem.findByIdAndRemove(req.params.id));
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  // Lógica para autenticação do usuário aqui
  // Verificação de nome de usuário e senha
  if (username === "exampleUser" && password === "examplePassword") {
    // Se a autenticação for bem-sucedida, envie uma resposta adequada
    res.json({ message: "Login successful" });
  } else {
    // Se a autenticação falhar, envie uma resposta de erro adequada
    res.status(401).json({ message: "Login failed" });
  }
});


module.exports = router;