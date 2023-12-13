import React, { useState } from 'react';
import Modal from './Modal';
import { Link } from 'react-router-dom';


function App() {
  const [openModal, setOpenModal] = useState(false)
}


export default function ListaDeProdutos({ produtos }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [carrinho, setCarrinho] = useState([]); 
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleComprarClick = (produto) => {
    setSelectedProduct(produto);
  };

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]); 
    setSelectedProduct(null); 
    setIsCartOpen(true); 
  };

  const limparCarrinho = () => {
    setCarrinho([]); 
    setIsCartOpen(false); 
  };

  const removerDoCarrinho = (index) => {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(index, 1); 
    setCarrinho(novoCarrinho);
  };

  const totalProdutos = carrinho.length; 
  const totalValores = carrinho.reduce((acc, produto) => acc + (produto.valor || 0), 0); // Soma dos valores dos produtos

  const renderProduto = (produto) => {
    return (
      <div className='produto' key={'produto_' + produto.id}>
        <Link to={'/detalhe/' + produto.id}>
          <img src={produto.foto} alt={'Foto do produto: ' + produto.nome} />
        </Link>
        <p className='nome'>{produto.nome}</p>
        <div className='price-container'>
          <p className='valorAntigo'> R$ {produto.valorAntigo ? produto.valorAntigo.toFixed(2) : '-'}</p>
          <p className='valor'>R$ {produto.valor ? produto.valor.toFixed(2) : '-'}</p>
        </div>
        <button className='btn btn-primary' onClick={() => handleComprarClick(produto)}>Comprar</button>
      </div>
    );
  };

  return (
    <div className='listaDeProdutos'>
      {produtos.map(renderProduto)}
      
      {selectedProduct && (
        <Modal isOpen={true} setModalOpen={() => setSelectedProduct(null)}>
          <div className="custom-modal">
            <button className='BtnModal right-button' onClick={() => setSelectedProduct(null)}>x</button>
            <h2>{selectedProduct.nome}</h2> 
            <img src={selectedProduct.foto} alt={'Foto do produto: ' + selectedProduct.nome} />
            <div className='price-container'>
              <p className='valorAntigo'> VALOR </p>
              <p className='valor'>R$ {selectedProduct.valor ? selectedProduct.valor.toFixed(2) : '-'}</p>
            </div>
            <button className='BtnModal' onClick={() => adicionarAoCarrinho(selectedProduct)}>Adicionar ao Carrinho</button>
          </div>
        </Modal>
      )}

      {isCartOpen && (
        <Modal isOpen={true} setModalOpen={() => setIsCartOpen(false)}>
          <div className="modal3">
            <button className='BtnModal-closed1' onClick={() => setIsCartOpen(false)}>x</button>
            <h2>Produtos no Carrinho ({totalProdutos})</h2>
            <ul>
              {carrinho.map((produto, index) => (
                <li key={index} className="carrinho-item">
                  <button className="BtnRemover" onClick={() => removerDoCarrinho(index)}>-</button>
                  <div className="produto-info">
                    {produto.nome} - R$ {produto.valor.toFixed(2)}
                  </div>
                </li>
              ))}
            </ul>
            <p>Total de Valores: R$ {totalValores.toFixed(2)}</p>
            <button className='BtnModal3' onClick={limparCarrinho}>Limpar Carrinho</button>
          </div>
        </Modal>
      )}
    </div>
  );
}
