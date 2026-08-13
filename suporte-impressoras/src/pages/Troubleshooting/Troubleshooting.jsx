export default function Troubleshooting() {
  return (
    <div>
      <h2>Impressoras: Erros Conhecidos e Como Proceder</h2>
      <section style={{ marginBottom: '20px' }}>
        <h3 style={{ color: '#004080' }}>Conexão USB</h3>
        <p>Realize o envio da página teste do Windows via <code>Control Printers</code>. Se houver erro, verifique se a porta COM está selecionada corretamente, limpe o Spooler de Impressão na pasta <code>C:\Windows\System32\spool\PRINTERS</code> e reinicie o serviço.</p>
      </section>
      <section>
        <h3 style={{ color: '#004080' }}>Conexão de Rede</h3>
        <p>Em impressoras de rede, a porta é o IP da impressora. Solicite ao cliente um autoteste para confirmar se o IP foi alterado por quedas de luz/internet e ajuste nas propriedades da porta TCP/IP se necessário.</p>
      </section>
    </div>
  );
}