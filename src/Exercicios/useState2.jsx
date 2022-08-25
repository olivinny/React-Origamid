import React, { useState } from "react";
import ButtonModal from "./components/ButtonModal";
import Modal from "./components/Modal";

function App() {
  const [modal, setModal] = useState(false);
  const [items, setItems] = useState("Teste");

  function handleClick() {
    if (items === "Teste") setItems("Não Teste");
    if (items === "Não Teste") setItems("Teste");
  }

  return (
    <div>
      <button onClick={handleClick}>{items}</button>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </div>
  );
}

export default App;
