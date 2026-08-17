import { useState } from 'react';
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
        <span onClick={() => handleNavClick('home')}>Início</span>
        <span onClick={() => handleNavClick('drivers')}>Drivers</span>
        <span onClick={() => handleNavClick('troubleshooting')}>Problemas</span>
        <span onClick={() => handleNavClick('browser')}>Navegador</span>
        <span onClick={() => handleNavClick('utilities')}>Utilitários</span>
      </nav>
    </header>
  );
}