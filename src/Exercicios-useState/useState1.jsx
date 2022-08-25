import React, { useState } from "react";

function App() {
  const [ativo, setAtivo] = useState(false);
  const [dados, setDados] = useState({ nome: "Vinicius", idade: 29 });

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: "Possui Faculdade" });
  }

  return (
    <div>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>{ativo ? "Ativo" : "Inativo"}</button>
    </div>
  );
}

export default App;
