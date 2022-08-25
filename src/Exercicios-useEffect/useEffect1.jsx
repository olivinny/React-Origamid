import React, { useEffect, useState } from "react";

function App() {
  const path = "https://ranekapi.origamid.dev/json/api/produto/notebook";
  const [contar, setContar] = useState(0);
  const [dados, setDados] = useState(null);

  useEffect(() => {
    fetch(path)
      .then((res) => res.json())
      .then((json) => setDados(json));
  }, []);

  return (
    <div>
      {dados && (
        <div>
          <h1>{dados.nome}</h1>
          <p>R$ {dados.preco * contar}</p>
        </div>
      )}
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
}

export default App;
