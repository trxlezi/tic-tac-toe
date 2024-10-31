import React, { useState } from 'react';
import Tabuleiro from './Tabuleiro';
import { Container, Button } from 'react-bootstrap';

function Jogo() {
  const [historico, definirHistorico] = useState([Array(9).fill(null)]);
  const [passoAtual, definirPassoAtual] = useState(0);
  const [proximoJogador, definirProximoJogador] = useState(true);

  const casasAtuais = historico[passoAtual];
  const vencedor = encontrarVencedor(casasAtuais);

  const lidarComClique = (i) => {
    if (casasAtuais[i] || vencedor) return;

    const proximasCasas = casasAtuais.slice();
    proximasCasas[i] = proximoJogador ? 'X' : 'O';
    const novoHistorico = historico.slice(0, passoAtual + 1).concat([proximasCasas]);

    definirHistorico(novoHistorico);
    definirPassoAtual(novoHistorico.length - 1);
    definirProximoJogador(!proximoJogador);
  };

  const voltarPara = (movimento) => {
    definirPassoAtual(movimento);
    definirProximoJogador(movimento % 2 === 0);
  };

  const movimentos = historico.map((_, movimento) => (
    <Button
      key={movimento}
      variant="outline-secondary"
      onClick={() => voltarPara(movimento)}
      className="me-2 mb-2"
    >
      {movimento ? `Voltar para a jogada #${movimento}` : 'Reiniciar o jogo'}
    </Button>
  ));

  return (
    <Container className="jogo text-center">
      <h3 className="text-warning mb-3">
        {vencedor ? `Vencedor: ${vencedor}` : `Próximo jogador: ${proximoJogador ? 'X' : 'O'}`}
      </h3>
      <Tabuleiro casas={casasAtuais} aoSelecionarCasa={lidarComClique} />
      <div className="informacoes-jogo mt-3 d-flex flex-column align-items-center">
        <div className="btn-group" role="group">
          {movimentos}
        </div>
      </div>
    </Container>
  );
}

function encontrarVencedor(casas) {
  const linhas = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < linhas.length; i++) {
    const [a, b, c] = linhas[i];
    if (casas[a] && casas[a] === casas[b] && casas[a] === casas[c]) {
      return casas[a];
    }
  }
  return null;
}

export default Jogo;
