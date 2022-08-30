import React, { useState, useEffect } from "react";

const Produto = ({ produto }) => {
  const [dados, setDados] = useState(null);
  const path = "https://ranekapi.origamid.dev/json/api/produto/";

  useEffect(() => {
    if (produto !== null) {
      fetch(`${path}${produto}`)
        .then((response) => response.json())
        .then((json) => setDados(json));
    }
  }, [produto]);
  if (dados === null) return null;
  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>{dados.preco}</p>
    </div>
  );
};

export default Produto;
