const mongoose = require('mongoose');

const ProdutoSchema = {
  nome: String,
  valor: Number,
  valorAntigo: Number,
  foto: String
};

module.exports = mongoose.model('Produto', ProdutoSchema);