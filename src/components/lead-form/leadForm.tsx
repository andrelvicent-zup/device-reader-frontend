import React from 'react';
import './leadForm.css';

const LeadForm: React.FC<{ link: string }> = ({ link }) => {
  return (
    <div className="botao-container">
      <a href={link} className="botao-link">
        quero saber mais sobre o projeto
      </a>
    </div>
  );
};

export default LeadForm;