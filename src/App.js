import { useState } from "react";
import "./App.css";

function App() {
  const [placarJogadorUm, setPlacarJogadorUm] = useState(0);
  const [placarJogadorDois, setPlacarJogadorDois] = useState(0);
  const [numeroGerado, setNumeroGerado] = useState("");

  // gera um número entre 1 e 6
  const gerarNumeroAleatorio = () => {
    const aleatorio = Math.floor(Math.random() * 6) + 1;
    setNumeroGerado(aleatorio);
  };

  return (
    <div className="App">
      <h1>Pig Game</h1>
      <button onClick={gerarNumeroAleatorio}>Role os dados!</button>
      <img
        src={process.env.PUBLIC_URL + `/img/dice-${numeroGerado}.png`}
        style={{ width: "100px", height: "100px" }}
        alt="valor gerado pelo dado"
      />
      <p>Jogador um: {placarJogadorUm}</p>
      <p>Jogador dois: {placarJogadorDois}</p>
    </div>
  );
}

export default App;
