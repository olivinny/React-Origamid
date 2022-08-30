import React, { useEffect, useRef, useState } from "react";

function App() {
  const [input, setInput] = useState("Envie seu comentario");
  const [comentarios, setComentarios] = useState([`teste`, `teste2`]);
  const inputElement = useRef();

  function handleClick() {
    setComentarios([...comentarios, input]);
    setInput("");
    inputElement.current.focus();
  }

  return (
    <div>
      <ul>
        {comentarios.map((comentario, index) => {
          return <li key={comentario + index}>{comentario}</li>;
        })}
      </ul>
      <input
        type="text"
        ref={inputElement}
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
}

export default App;
