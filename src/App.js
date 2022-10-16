import { useState } from "react";
import "./App.css";

function App() {
  const [placarJogadorUm, setPlacarJogadorUm] = useState(0);
  const [placarJogadorDois, setPlacarJogadorDois] = useState(0);
  const [numeroGerado, setNumeroGerado] = useState("");

  // gera um número entre 1 e 6
  const gerarNumeroAleatorio = () => {
    setNumeroGerado(Math.floor(Math.random() * 6) + 1);
  };

  return (
    <div className="App">
      <h1>Pig Game</h1>
      <button onClick={gerarNumeroAleatorio}>Role os dados!</button>
      <p>Valor gerado: {numeroGerado}</p>
      <p>Jogador um: {placarJogadorUm}</p>
      <p>Jogador dois: {placarJogadorDois}</p>
    </div>
  );
}

export default App;
