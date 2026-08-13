export default function Footer() {
  const footerStyle = {
    backgroundColor: '#004080', // Mesma cor azul do header
    color: '#ffffff',
    padding: '1.5rem',
    textAlign: 'center',
    marginTop: '2rem',
    fontSize: '0.9rem',
    borderTop: '4px solid #0066cc' // Detalhe com um azul um pouco mais claro
  };

  return (
    <footer style={footerStyle}>
      <p>© 2026 Suporte Interno de Impressoras</p>
      <p style={{ marginTop: '5px', opacity: 0.8 }}>
        Desenvolvido para facilitar orientações técnicas e configuração de drivers.
      </p>
    </footer>
  );
}