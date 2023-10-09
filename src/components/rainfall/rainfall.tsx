import React, { useEffect, useState } from 'react';
import './rainfall.css'

interface ContadorNumeroProps {
  titulo: string;
  apiUrl: string;
}

const ContadorDeGotas: React.FC<ContadorNumeroProps> = ({ titulo, apiUrl }) => {
  const [numero, setNumero] = useState<number | null>(null);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setNumero(data.numero);
      })
      .catch((error) => {
        console.error('Erro ao buscar número da API:', error);
      });
  }, [apiUrl]);

  return (
    <div className="contador-container">
      <p className="contador-numero">Volume Instantâneo: {numero !== null ? numero : 5} mL</p>
    </div>
  );
};

export default ContadorDeGotas;