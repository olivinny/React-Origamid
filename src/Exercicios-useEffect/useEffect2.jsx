import React, { useState } from "react";
import Produto from "./components/produto";

function App() {
  const [ativo, setAtivo] = useState(false);

  return (
    <div>
      {ativo && <Produto />}
      <button onClick={() => setAtivo(!ativo)}>Ativar</button>
    </div>
  );
}

export default App;
