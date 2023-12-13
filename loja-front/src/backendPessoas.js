import axios from 'axios';

const URL_USUARIOS = 'http://localhost:5000/jwt/users';

export const convertePessoas = (p) => {
    return {
      id: p.id ? p.id : p._id,
      nome: p.name,
      Email: p.email , 
      senha: p.password,
    };
  };

export const getPessoas = () => {
    return axios.get(URL_USUARIOS).then(res => {
      return res.data.map(convertePessoas);
    });
  };
  
  export const getPessoasPorId = (id) => {
    return axios.get(`${URL_USUARIOS}/${id}`).then(res => {
      return convertePessoas(res.data);
    });
  };
  
  export const salvarPessoas = (form) => {
    return axios.post(URL_USUARIOS, form);
  };
  
  export const excluirPessoas = (id) => {
    return axios.delete(`${URL_USUARIOS}/${id}`);
  };
  
