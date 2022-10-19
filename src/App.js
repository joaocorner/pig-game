import { useState, useEffect } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [placarJogadorUm, setPlacarJogadorUm] = useState(0);
  const [placarJogadorDois, setPlacarJogadorDois] = useState(0);
  const [placarRodada, setPlacarRodada] = useState(0);
  const [numeroGerado, setNumeroGerado] = useState(0);
  const [vezAtual, setVezAtual] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [fimDeJogo, setFimDeJogo] = useState(false);
  const [modal, setModal] = useState(false);
  const pontuacaoVitoria = 10;

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
    if (placarJogadorUm >= pontuacaoVitoria) {
      setMensagem("Jogador 1 venceu");
      setFimDeJogo(true);
    } else if (placarJogadorDois >= pontuacaoVitoria) {
      setMensagem("Jogador 2 venceu");
      setFimDeJogo(true);
    }
  }, [placarRodada]);

  const passarVez = () => {
    // salva os pontos na vez do jogador que passou
    if (!vezAtual) {
      setPlacarJogadorUm(placarJogadorUm + placarRodada);
      if (placarJogadorUm <= pontuacaoVitoria) {
        setVezAtual(!vezAtual);
      }
    } else {
      setPlacarJogadorDois(placarJogadorDois + placarRodada);
      if (placarJogadorDois <= pontuacaoVitoria) {
        setVezAtual(!vezAtual);
      }
    }
    setPlacarRodada(0);
  };

  const fecharModal = () => {
    setModal(false);
  };

  const abrirModal = () => {
    setModal(true);
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
      <h1 className="titulo-jogo">Pig Game</h1>
      <div className="conteudo">
        <div className="ilustracao">
          <img
            src={process.env.PUBLIC_URL + `/img/pig.png`}
            style={{}}
            alt="porco de óculos e gravata em cartoon segurando um dado"
          />
          <button onClick={abrirModal}>como jogar</button>
        </div>
        <div className="partida">
          <div className="jogadorUm">
            <h3>Jogador 1 </h3>
            <h3>{placarJogadorUm}</h3>
          </div>
          <div className="jogadorDois">
            <h3>Jogador 2 </h3>
            <h3>{placarJogadorDois}</h3>
          </div>
          <div className="info-jogo">
            <button onClick={gerarNumeroAleatorio} disabled={fimDeJogo}>
              Jogue os dados
            </button>

            {numeroGerado === 0 ? (
              ""
            ) : (
              <img
                src={process.env.PUBLIC_URL + `/img/dice-${numeroGerado}.png`}
                style={{ width: "70px", height: "70px" }}
                alt="valor gerado pelo dado"
              />
            )}

            {!vezAtual && !fimDeJogo && (
              <div>
                <p>Jogador 1</p>
                <p>ponto acumulado {placarRodada}</p>
              </div>
            )}
            {vezAtual && !fimDeJogo && (
              <div>
                <p>Jogador 2 </p>
                <p>ponto acumulado {placarRodada}</p>
              </div>
            )}

            <button onClick={passarVez} disabled={fimDeJogo}>
              Passar vez
            </button>
            <button onClick={jogarNovamente}>Reiniciar</button>
            {modal && <Modal fecharModal={fecharModal} />}
            <p className="mensagemFinal">{mensagem}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
