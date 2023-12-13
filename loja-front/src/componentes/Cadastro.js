import React, { useState } from 'react';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';

export default function FormPessoa() {
  const formVazio = () => {
    return {
      name: '',
      email: '',
      password: '',
    };
  };

  const navigate = useNavigate();
  const [form, setForm] = useState(formVazio());

  const setValor = (evento) => {
    setForm({ ...form, [evento.target.name]: evento.target.value });
  };

  const cadastrarPessoa = async (e) => {
    e.preventDefault();

    const userData = {
      name: form.name,
      email: form.email,
      password: form.password,
    };

    try {
      const response = await fetch('http://localhost:5000/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('errorMessage').style.display = 'none';
      } else {
        const errorData = await response.json();
        document.getElementById('successMessage').style.display = 'none';
        document.getElementById('errorMessage').innerText = errorData.error;
        document.getElementById('errorMessage').style.display = 'block';
      }
    } catch (error) {
        console.error('Erro de rede:', error);
        document.getElementById('successMessage').style.display = 'none';
        document.getElementById('errorMessage').innerText = 'Erro de conexão com o servidor';
        document.getElementById('errorMessage').style.display = 'block';
    }
  };

  return (
    <Modal isOpen={true} setModalOpen={() => {}}>
      <div className="container-cadastro">
        <form onSubmit={cadastrarPessoa}>
          <div className="voltar1">
            <a href="/" className="btn-voltar1">
              <div></div>
            </a>
          </div>
          <div className="form">
            <div className="form-header">
              <div className="title">
                <h1>Cadastre-se</h1>
              </div>
              <div className="login-button">
                <button>
                  <a href="/">Entrar</a>
                </button>
              </div>
            </div>
            <div className="input-group">
              <div className="input-box">
                <label htmlFor="firstname">Primeiro Nome</label>
                <input
                  id="firstname"
                  type="text"
                  name="name"
                  placeholder="Digite seu primeiro nome"
                  required
                  value={form.name}
                  onChange={setValor}
                />
              </div>
              <div className="input-box">
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Digite seu e-mail"
                  required
                  value={form.email}
                  onChange={setValor}
                />
              </div>
              <div className="input-box">
                <label htmlFor="password">Senha</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Digite sua senha"
                  required
                  value={form.password}
                  onChange={setValor}
                />
              </div>
            </div>
            <div className="continue-button">
              <button type="submit">Continuar</button>
            </div>
          </div>
        </form>
        <p id="successMessage" style={{ display: 'none', color: 'green' }}>
          Cadastro realizado com sucesso
        </p>
        <p id="errorMessage" style={{ display: 'none', color: 'red' }}></p>
      </div>
    </Modal>
  );
}
