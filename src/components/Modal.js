import React from "react";

const Modal = (props) => {
  return (
    <>
      <div className="backdrop" onClick={props.fecharModal}></div>
      <div className="card modal">
        <header className="header">
          <h2>como jogar</h2>
        </header>
        <div className="content">
          <p>
            Esse jogo tem o objetivo de chegar em 100 pontos antes do seu
            oponente. Jogue os dados enquanto quiser que o ponto vai ser somado
            nos seus pontos totais. Mas... se vier o 1, perde-se todos os pontos
            da rodada. Pra manter os pontos, passe a sua vez. Se possuir mais de
            100 pontos, passe sua vez e ganhe o duelo!
          </p>
        </div>
        <footer className="actions">
          <button onClick={props.fecharModal}>OK</button>
        </footer>
      </div>
    </>
  );
};

export default Modal;
