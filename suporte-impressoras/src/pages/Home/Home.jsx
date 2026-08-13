export default function Home() {
  return (
    <div>
      <h2>Orientações Internas de Problemas de Impressão</h2>
      <p>Bem-vindo ao portal de suporte a impressoras. Utilize o menu superior para navegar entre as categorias de configuração, motor de impressão, correções de erros e modelos de drivers disponíveis.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
        <div style={{ background: '#f9fbff', border: '1px solid #cce0ff', padding: '15px', borderRadius: '6px' }}>
          <h3 style={{ color: '#0066cc' }}>Saipos Printer</h3>
          <p>Primeiro passo é conferir se a impressora está vinculada ao Saipos Printer na barra de tarefas (canto inferior direito)[cite: 1]. Caso esteja Offline ou com falha de diretório, verifique os logs e configurações.</p>
        </div>
        <div style={{ background: '#f9fbff', border: '1px solid #cce0ff', padding: '15px', borderRadius: '6px' }}>
          <h3 style={{ color: '#0066cc' }}>Configurações de Usuários</h3>
          <p>Verifique em Menu &gt; Usuários e permissões se há configurações corretas de direcionamento de impressão por usuário ou Fila única.</p>
        </div>
      </div>
    </div>
  );
}