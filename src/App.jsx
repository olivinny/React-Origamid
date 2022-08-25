import React, { useState } from "react";
import Produto from "./Desafio1/Componentes/Produto";

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

function App() {
  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(null);
  const rota = "https://ranekapi.origamid.dev/json/api/produto/";

  async function handleClick(event) {
    setCarregando(true);
    const item = event.target.innerText;
    const response = await fetch(`${rota}${item}`);
    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }

  return (
    <>
      <button style={{ margin: "0.5rem" }} onClick={handleClick}>
        Notebook
      </button>
      <button style={{ margin: "0.5rem" }} onClick={handleClick}>
        Smartphone
      </button>
      <button style={{ margin: "0.5rem" }} onClick={handleClick}>
        Tablet
      </button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </>
  );
}

export default App;
