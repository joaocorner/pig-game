import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [placarJogadorUm, setPlacarJogadorUm] = useState(0);
  const [placarJogadorDois, setPlacarJogadorDois] = useState(0);
  const [placarRodada, setPlacarRodada] = useState(0);
  const [numeroGerado, setNumeroGerado] = useState(0);
  const [vezAtual, setVezAtual] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [fimDeJogo, setFimDeJogo] = useState(false);

  // gera um número entre 1 e 6
  const gerarNumeroAleatorio = () => {
    const aleatorio = Math.floor(Math.random() * 6) + 1;
    // armazena o número gerado
    setNumeroGerado(aleatorio);

    // armazena a pontuação antiga na rodada com o valor atual
    setPlacarRodada(placarRodada + aleatorio);

    // descarta os pontos caso aleatorio seja 1 e passa a vez
    if (aleatorio === 1) {
      setPlacarRodada(0);
      setVezAtual(!vezAtual);
    }
  };

  // anunciando o vencedor
  useEffect(() => {
    if (placarJogadorUm >= 20) {
      setMensagem("Jogador UM venceu!");
      setFimDeJogo(true);
    } else if (placarJogadorDois >= 20) {
      setMensagem("Jogador DOIS venceu!");
      setFimDeJogo(true);
    }
  }, [placarRodada]);

  const passarVez = () => {
    // salva os pontos na vez do jogador que passou
    if (!vezAtual) {
      setPlacarJogadorUm(placarJogadorUm + placarRodada);
      if (placarJogadorUm <= 20) {
        setVezAtual(!vezAtual);
      }
    } else {
      setPlacarJogadorDois(placarJogadorDois + placarRodada);
      if (placarJogadorDois <= 20) {
        setVezAtual(!vezAtual);
      }
    }
    setPlacarRodada(0);
  };

  const jogarNovamente = () => {
    setFimDeJogo(false);
    setMensagem("");
    setNumeroGerado(0);
    setPlacarJogadorUm(0);
    setPlacarJogadorDois(0);
    setVezAtual(false);
  };

  return (
    <div className="App">
      <h1>Pig Game</h1>
      <img
        src={process.env.PUBLIC_URL + `/img/pig.png`}
        style={{ width: "300px", height: "300px" }}
        alt="porco de óculos e gravata em cartoon segurando um dado"
      />
      <br />
      <button className="" onClick={gerarNumeroAleatorio} disabled={fimDeJogo}>
        Role os dados!
      </button>
      <br />
      {numeroGerado === 0 ? (
        ""
      ) : (
        <img
          src={process.env.PUBLIC_URL + `/img/dice-${numeroGerado}.png`}
          style={{ width: "100px", height: "100px" }}
          alt="valor gerado pelo dado"
        />
      )}

      {!vezAtual && !fimDeJogo && <p>Jogador um rodada: {placarRodada}</p>}
      {vezAtual && !fimDeJogo && <p>Jogador dois rodada: {placarRodada}</p>}

      <p>Jogador um: {placarJogadorUm}</p>
      <p>Jogador dois: {placarJogadorDois}</p>
      <button onClick={passarVez} disabled={fimDeJogo}>
        Passar vez
      </button>
      <br />

      <button onClick={jogarNovamente}>Reiniciar</button>
      <p>{mensagem}</p>
    </div>
  );
}

export default App;
