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
  const [computador, setComputador] = useState(false);
  const [bloquearBotao, setBloquearBotao] = useState(false);
  const pontuacaoVitoria = 100;

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

  // habilita o modo computador
  const escolherOponente = () => {
    setComputador(!computador);
  };

  // anunciando o vencedor
  useEffect(() => {
    if (placarJogadorUm >= pontuacaoVitoria) {
      setMensagem("Jogador 1 venceu");
      setVezAtual(false);
      setFimDeJogo(true);
      setBloquearBotao(true);
    } else if (placarJogadorDois >= pontuacaoVitoria) {
      setMensagem("Jogador 2 venceu");
      setVezAtual(true);
      setFimDeJogo(true);
      setBloquearBotao(true);
    }

    // jogada automática do computador
    if (computador === true && vezAtual === true && fimDeJogo === false) {
      setBloquearBotao(true);
      setTimeout(() => {
        gerarNumeroAleatorio();

        // passa a vez caso consiga mais de 15 pontos
        if (placarRodada >= 15) {
          passarVez();
        }
      }, 1000);
    }

    // habilita os botôes na vez do jogador 1 contra o computador
    if (computador === true && vezAtual === false && fimDeJogo === false) {
      setBloquearBotao(false);
    }
  }, [placarRodada, vezAtual]);

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

  // reinicia o jogo para as configurações iniciais
  const jogarNovamente = () => {
    setFimDeJogo(false);
    setMensagem("");
    setNumeroGerado(0);
    setPlacarJogadorUm(0);
    setPlacarJogadorDois(0);
    setPlacarRodada(0);
    setVezAtual(false);
    setBloquearBotao(false);
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
          <div className="oponente" onChange={escolherOponente}>
            <p>jogar contra:</p>
            <input
              type="checkbox"
              name="adversario"
              id="computador"
              value="computador"
              disabled={numeroGerado > 0 ? true : false}
            />
            computador
          </div>
        </div>
        <div className="partida">
          <div className={`jogador-um ${vezAtual ? "" : "vez-atual"}`}>
            <h3>Jogador 1 </h3>
            <h3>{placarJogadorUm}</h3>
          </div>
          <div className={`jogador-dois ${vezAtual ? "vez-atual" : ""}`}>
            <h3>Jogador 2 </h3>
            <h3>{placarJogadorDois}</h3>
          </div>
          <div className="info-jogo">
            <button onClick={gerarNumeroAleatorio} disabled={bloquearBotao}>
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

            <p>ponto acumulado {placarRodada}</p>

            <button onClick={passarVez} disabled={bloquearBotao}>
              Passar vez
            </button>
            <button onClick={jogarNovamente}>Reiniciar</button>
            {modal && <Modal fecharModal={fecharModal} />}
            <p className="mensagem-final">{mensagem}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
