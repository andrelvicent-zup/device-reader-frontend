import React from 'react';
import './rainfall.css'

interface ContadorNumeroProps {
  numero: number;
}

const ContadorDeGotas: React.FC<ContadorNumeroProps> = ({  numero }) => {
  return (
    <div className="contador-container">
      <p className="contador-numero">Volume Instantâneo: {numero ? numero : 0} mL</p>
    </div>
  );
};

export default ContadorDeGotas;