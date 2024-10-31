import React from 'react';
import { Button } from 'react-bootstrap';

function Casa({ valor, aoClicar }) {
  return (
    <Button
      variant="outline-danger"
      className="casa"
      onClick={aoClicar}
      style={{
        width: '60px',
        height: '60px',
        fontSize: '24px',
        border: '2px solid red',
        borderRadius: '8px',
      }}
    >
      {valor}
    </Button>
  );
}

export default Casa;
