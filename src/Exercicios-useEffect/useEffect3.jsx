import React, { useEffect, useState } from "react";
import Produto from "./Exercicios-useEffect/components/Produto.jsx";

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo
function App() {
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    if (produto !== null) window.localStorage.setItem("produto", produto);
  }, [produto]);

  useEffect(() => {
    const produtoLocal = window.localStorage.getItem("produto");
    if (produtoLocal !== null) setProduto(produtoLocal);
  }, []);

  function handleClick(event) {
    setProduto(event.target.innerText);
  }
  return (
    <>
      <h1>Preferencia: {produto}</h1>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
      <Produto produto={produto} />
    </>
  );
}

export default App;
