import React from 'react';
import Casa from './Casa';
import { Container, Row, Col } from 'react-bootstrap';

function Tabuleiro({ casas, aoSelecionarCasa }) {
  const renderizarCasa = (i) => (
    <Casa valor={casas[i]} aoClicar={() => aoSelecionarCasa(i)} />
  );

  return (
    <Container className="tabuleiro d-flex flex-column align-items-center">
      {[0, 3, 6].map((linha, indice) => (
        <Row key={indice} className="mx-0">
          <Col className="p-0">{renderizarCasa(linha)}</Col>
          <Col className="p-0">{renderizarCasa(linha + 1)}</Col>
          <Col className="p-0">{renderizarCasa(linha + 2)}</Col>
        </Row>
      ))}
    </Container>
  );
}

export default Tabuleiro;
