import React from 'react';
import './Button.css';

const Button = ({ title, onClick }) => (
  <button
    className="MeuBotao"
    onClick={onClick}
  >
    {title}
  </button>
);

export default Button;
