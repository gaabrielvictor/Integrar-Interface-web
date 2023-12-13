const mongoose = require('mongoose');

const carrinhoSchema = new mongoose.Schema({
  produto: {
    type: mongoose.Schema.Types.ObjectId, 
    required: true
  },
  quantidade: {
    type: Number,
    required: true,
    min: 1 
  }
});

const Carrinho = mongoose.model('Carrinho', carrinhoSchema);

module.exports = Carrinho;
