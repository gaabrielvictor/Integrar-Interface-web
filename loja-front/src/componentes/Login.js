import React, { useState } from 'react';
import Modal from './Modal'; 



const Login = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    console.log('Username:', username);
    console.log('Password:', password);
    onClose(); 
  };

  return (
    <Modal isOpen={true} setModalOpen={(true)}>
      <div className="main-login">
        <div className="left-login">
          <div className='voltar'>
          <a href="/" className="d-flex align-items-center link-body-emphasis text-decoration-none">
            <span className="btn-voltar"><div></div></span>
          </a>
          </div>
          <h1>Faça Login<br />E entre para nosso time!</h1>
          <img 
                src='https://img.freepik.com/vetores-gratis/modelo-de-logotipo-de-livraria-de-design-plano_23-2149325325.jpg?w=740&t=st=1695687626~exp=1695688226~hmac=ceec938e51cb762d719d5ac6b866ccbf49e770b43dcb32cb934e5f5ae613eaf0'
                className="left-login-image"
                alt="horse"
            />
        </div>
        <div className="right-login">
          <div className="card-login">
            <h1>LOGIN</h1>
            <div className="textfield">
              <label htmlFor="usuario">Usuário</label>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="textfield">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn-login" onClick={handleLogin}>Logar</button>
            <h4>Ainda não se Casdastrou ? <a href="/Cadastro">Cadastrar</a></h4>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Login;
