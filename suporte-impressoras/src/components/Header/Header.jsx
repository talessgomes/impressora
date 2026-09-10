import { useState } from 'react';
import {ButtonHeader} from './styled'
import saipos from '../../assets/images/logo/saipos.png'

export default function Header({ setPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (pageName) => {
    setPage(pageName);
    setIsOpen(false); 
  };

  return (
    <header className="header-container">
      <div className="logo" onClick={() => handleNavClick('home')}>
        <img src={saipos} alt="Logotipo da Empresa" style={{ width: '150px' }}/>
      </div>
      
      {/* Botão Hambúrguer para Celular */}
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Links de Navegação */}
      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <ButtonHeader onClick={() => handleNavClick('home')}>Início</ButtonHeader>
        <ButtonHeader onClick={() => handleNavClick('drivers')}>Drivers</ButtonHeader>
        <ButtonHeader onClick={() => handleNavClick('troubleshooting')}>Problemas</ButtonHeader>
        <ButtonHeader onClick={() => handleNavClick('browser')}>Navegador</ButtonHeader>
        <ButtonHeader onClick={() => handleNavClick('utilities')}>Utilitários</ButtonHeader>
      </nav>
    </header>
  );
}