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

module.exports = router;