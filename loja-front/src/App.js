import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Cabecalho from "./componentes/Cabecalho";
import Body from "./componentes/Body";
import Elipse from "./componentes/Elipse";
import Box from "./componentes/Box";
import Vistos from "./componentes/Vistos";
import FormProduto from "./componentes/FormProduto";
import ListaDeProdutos from "./componentes/ListaDeProdutos";
import DetalheProduto from "./componentes/DetalheProduto";
import PaginaNaoEncontrada from "./componentes/PaginaNaoEncontrada";
import { getProdutos, salvarProduto, excluirProduto } from "./backend";
import Login from "./componentes/Login";
import Cadastro from "./componentes/Cadastro";

function App() {
  const [produtos, setProdutos] = useState([]);

  const cadastrarProduto = async (form) => {
    await salvarProduto(form);
    setProdutos(await getProdutos());
  };

  const removerProduto = async (id) => {
    await excluirProduto(id);
    setProdutos(await getProdutos());
  };

  useEffect(() => {
    getProdutos().then((prods) => setProdutos(prods));
  }, []);

  return (
      <Router>
      <Cabecalho />
      <Body />
        <Routes>
          <Route
            path="/"
            exact
            element={<ListaDeProdutos produtos={produtos} />}
          />
          <Route path="/novo" exact element={<FormProduto onCadastrar={cadastrarProduto} />} />
          <Route path="/detalhe/:id" exact element={<DetalheProduto onExcluir={removerProduto} />} />
          <Route path="*" element={<PaginaNaoEncontrada />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/Cadastro" exact element={<Cadastro />} />
        </Routes>
      <Elipse />
      <Box/>
      <Vistos/>
      </Router>
  );
}

export default App;
