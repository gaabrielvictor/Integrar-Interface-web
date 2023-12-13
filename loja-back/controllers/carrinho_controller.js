const express = require('express');

function criarCarrinhoRouter(Carrinho) {
  const router = express.Router();

  router.post('/carrinhos', async (req, res) => {
    try {
      const { produto, quantidade } = req.body;

      // Verifica se o produto já existe no carrinho
      const produtoExistente = await Carrinho.findOne({ produto });

      if (produtoExistente) {
        // Se existir, atualiza a quantidade do produto no carrinho
        produtoExistente.quantidade += quantidade;
        await produtoExistente.save();
        return res.status(200).json({ message: 'Produto atualizado no carrinho' });
      } else {
        // Se não existir, cria um novo item no carrinho
        const novoProduto = new Carrinho({ produto, quantidade });
        await novoProduto.save();
        return res.status(201).json({ message: 'Produto adicionado ao carrinho' });
      }
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao adicionar produto ao carrinho' });
    }
  });

  router.delete('/carrinhos/limpar', async (req, res) => {
    try {
      // Remove todos os itens do carrinho
      await Carrinho.deleteMany({});
      return res.status(200).json({ message: 'Carrinho limpo' });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao limpar o carrinho' });
    }
  });

  return router;
}

module.exports = criarCarrinhoRouter;
