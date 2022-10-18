# Pig Game

É um jogo aonde o objetivo é alcançar 100 pontos antes do seu adversário. Jogue os dados enquanto você quiser e vá somando os pontos, ou até sair o número 1. Se vier o número 1, você perde os pontos somados da rodada. Pra manter os pontos, passe a sua vez.

Projeto desenvolvido para melhorar os conceitos em React.

[Confira agora!](https://joaocorner.github.io/pig-game/)

## Sumário

- [Pig Game](#pig-game)
  - [Sumário](#sumário)
  - [Meu processo](#meu-processo)
    - [Realizado com](#realizado-com)
    - [Rode na sua máquina](#rode-na-sua-máquina)
    - [Aprenda mais em...](#aprenda-mais-em)
  - [Autor](#autor)
  - [Lista de tarefas](#lista-de-tarefas)

## Meu processo

### Realizado com

- React
- CSS

### Rode na sua máquina

Tenha o [Node](https://nodejs.org/en/) instalado em seu computador.

Após realizar o download do repositório, na pasta raíz do projeto utilize o comando `npm install` para baixar as dependências do projeto, e após finalizar, utilize `npm start`

O aplicativo irá rodar em modo de desenvolvedor.\
Abra em [http://localhost:3000](http://localhost:3000) para ver pelo seu browser.

Caso realiza qualquer modificação no projeto, já irá vê-lo em tempo real atualizando.
Se houver algum erro, irá ser reportado no console.

### Aprenda mais em...

[Documentação do React](https://reactjs.org/)

[Documentação do Create React App](https://facebook.github.io/create-react-app/docs/getting-started)

## Autor

- Github - [joaocorner](https://github.com/joaocorner)
- LinkedIn - [joaoeduardocorner](https://www.linkedin.com/in/joaoeduardocorner/)

## Lista de tarefas

- [x] Ao clicar em Rolar os Dados:
  - [x] Gerar número aleatório
  - [x] Mostrar número sorteado
  - [x] Armazenar o número gerado
  - [x] Mostrar a imagem do dado
  - [x] Se não for 1:
    - [x] Adicionar o valor na pontuação da rodada
    - [x] Exibir novo resultado
  - [x] Se for 1:
    - [x] Descartar os pontos da rodada
    - [x] Passa a vez
  ***
- [x] Caso o jogador clique em passar a vez:
  - [x] Salvar os pontos acumulados da rodada no placar dele
  - [x] O placar é maior que 100 pontos?
    - [x] Se sim, o jogador venceu
      - [x] Bloquear os botões
      - [x] Ocultar a pontuação da rodada
    - [x] Se não, passa a vez
  - [x] Zerar o placar da rodada
  ***
- [x] Caso clique em reiniciar o jogo
  - [x] Placar geral é zerado
  - [x] Jogador inicial volta a ser o jogador 1
  - [x] Mensagem de vitória some
  - [x] Zera o valor do dado
  ***
  Em paralelo:
- [ ] Criar Layout
  - [ ] Responsivo
- [ ] Modal explicando as regras
- [ ] Oponente sendo IA
