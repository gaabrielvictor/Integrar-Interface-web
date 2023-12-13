import React, { useState } from 'react';
import Modal from './Modal';
import ListaDeProdutos from './ListaDeProdutos';

export default function Cabecalho() {
  const [openModal, setOpenModal] = useState(false);
  const [carrinho, setCarrinho] = useState([]);
  const logoUrl = 'https://img.freepik.com/vetores-gratis/modelo-de-logotipo-de-livraria-de-design-plano_23-2149325325.jpg?w=740&t=st=1695687626~exp=1695688226~hmac=ceec938e51cb762d719d5ac6b866ccbf49e770b43dcb32cb934e5f5ae613eaf0';

  const handleAbrirCarrinho = () => {
    setOpenModal(true);
  };

  const handleFecharCarrinho = () => {
    setOpenModal(false);
  };

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
    setOpenModal(true);
  };

  const limparCarrinho = () => {
    setCarrinho([]);
    setOpenModal(false);
  };

  const removerDoCarrinho = (index) => {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(index, 1);
    setCarrinho(novoCarrinho);
  };

  return (
    <header>
      <div className='Cabecalho'>
        <img src={logoUrl} alt="Logo da Empresa" />
        <a href="/" className="d-flex align-items-center link-body-emphasis text-decoration-none">
          <span className="h1">BookStore</span>
        </a>
        <div className="input-wrapper">
          <input type="text" className="input" />
          <button className="botao">
            <img src='./icons/Pesquisa.svg' alt="Ícone de Pesquisa" />
          </button>
          <div className='btn-wrapper'>
            <button className='login'>
              <a href="/login" className="me-1 link-body-emphasis text-decoration-none text-white">Login</a>
            </button>
            <button className='cart text-white' onClick={handleAbrirCarrinho}>Carrinho</button>
          </div>
        </div>
      </div>
      <div className='sale'>
        <img src='./icons/Rectangle.png' alt="Imagem de Oferta" />
      </div>

      {openModal && (
        <Modal isOpen={openModal} setModalOpen={handleFecharCarrinho}>
          <div className="custom-modal2">
            <button className='btnModal-close ' onClick={handleFecharCarrinho}>X</button>
            <h2>Produtos no Carrinho </h2>
            <ul>
              {carrinho.length > 0 ? (
                carrinho.map((produto, index) => (
                  <li key={index}>
                    {produto.nome} - R$ {produto.valor.toFixed(2)}
                    <button onClick={() => removerDoCarrinho(index)}>Remover</button>
                  </li>
                ))
              ) : (
                <p>Nenhum produto no carrinho.</p>
              )}
            </ul>
            <button className='btnModal' onClick={limparCarrinho}>Limpar Carrinho</button>
          </div>
        </Modal>
      )}
      <ListaDeProdutos produtos={carrinho} adicionarAoCarrinho={adicionarAoCarrinho} />
    </header>
  );
}
