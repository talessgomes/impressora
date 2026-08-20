import printer from "../../assets/images/printer/configurar saipos printer.png"
import saiposprinter from "../../assets/images/printer/Saipos printer.png"
import impoff from "../../assets/images/printer/impressora selecionada.png"
import impon from "../../assets/images/printer/impressora online.png"
import paste from "../../assets/images/printer/diretório.png"
import error from "../../assets/images/printer/error.png"
import optionprinter from "../../assets/images/printer/Option Printer.png"
import usersforimp from "../../assets/images/lineImp/users for imp.png"

export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Orientações Internas de Problemas de Impressão</h2>
      <p style={{ marginBottom: '30px' }}>
        Bem-vindo ao portal de suporte a impressoras. Utilize o menu superior para navegar entre as 
        categorias de configuração, motor de impressão, correções de erros e modelos de drivers disponíveis.
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', alignItems: 'start' }}>
        
        <div style={{ background: '#f9fbff', border: '1px solid #cce0ff', padding: '20px', borderRadius: '6px' }}>
          <h3 style={{ color: '#0066cc', marginTop: 0 }}>Saipos Printer</h3>
          
          <p style={{ marginBottom: '15px' }}>
            Primeiro passo é conferir se a impressora está vinculada ao Saipos Printer na barra de tarefas (canto inferior direito). 
            Caso esteja Offline ou com falha de diretório, verifique os logs e configurações.
          </p>
          
          <img style={{ width: '100%', borderRadius: '4px', marginBottom: '15px' }} src={printer} alt="Caso esteja Offline ou com falha de diretório, verifique os logs e configurações."/>
          
          <p style={{ marginBottom: '15px' }}>
            Caso o printer não abra as configurações ou não deixe abrir, realize a desinstalação do printer, 
            instale novamente e peça para o cliente reiniciar o computador. Através deste procedimento o printer 
            vai voltar a abrir novamente, porém sendo necessário vincular as impressoras do cliente novamente.
          </p>
          
          <p style={{ marginBottom: '15px' }}>

            <a target="_blank" rel="noopener noreferrer" href="https://programas.saipos.com/">
              Programas Saipos
            </a>. 
            Após, você chegará na tela que mostra os setores de impressões do Printer; Aqui iremos verificar 
            se as impressoras estão cadastradas dentro do printer. Para isso selecione o setor que deseja verificar, 
            no exemplo está selecionado o Setor caixa. Após selecionar o setor verifique se possui alguma impressora 
            na caixinha em branco abaixo.
          </p>
          
          <img style={{ width: '100%', borderRadius: '4px' }} src={saiposprinter} alt="Tela do Saipos printer"/>
          <p>Caso você abra o Saipos Printer, e encontre a impressora vinculada, mas com o status de Offline,
             siga para as orientações de Impressoras - erros conhecidos e como proceder</p>

          <img style={{ width: '100%', borderRadius: '4px' }} src={impoff}/>   
          <p>Se ao abrir o Saipos Printer, você encontrar a impressora vinculada como Online, siga para as seguintes verificações.</p>
        
          <img style={{ width: '100%', borderRadius: '4px' }} src={impon}/>
          <p>Verifique se o diretório de impressão está condizente com o diretório de downloads configurado no navegador do cliente.
             Após ajustar, peça para o cliente testar a impressão novamente e valide se o arquivo vai subir para a impressora.</p>
          <p>Caso continue sem imprimir, verifique se o Saipos Printer não está com erro de diretório de impressão,
             para validar essa informação, clique no ícone para abrir o local de impressão,
             se não for informado nenhuma mensagem de erro, siga para Impressoras - erros conhecidos e como proceder</p>
        
          <img style={{ width: '100%', borderRadius: '4px' }} src={paste}/>
          <p>Caso o printer informe a seguinte mensagem, 
            utilize o comando a seguir no navegador do cliente para atualizar o printer: saiposprinter:LXU=</p>

          <img style={{ width: '100%', borderRadius: '4px' }} src={error}/>
          <p>Caso o cliente relatar que as impressões estão muito lentas para serem enviadas para as impressoras
            (O arquivo é baixado mas demora para chegar na fila da impressora),
             acesse o seguinte arquivo na pasta Saipos: ‘C:\Saipos\Printer\SaiposPrinter.conf’,
              após, abra o arquivo como bloco de notas e procure a configuração 'TempoLimpaListaImpressao=3500’ 
              e substitua o 3500 por 2500 e reinicie o printer. Caso o ajuste não resolva a lentidão,
             verifique a conexão de rede do cliente e então o encaminhe para um técnico local. </p>

          <p>Caso o cliente relatar que as impressões não estão saindo, 
            e ao abrir o Saipos Printer seja identificado que ele está abrindo as tabelas na interface,
             faça o seguinte processo: Acessar o Gerenciador de Tarefas > Serviços
              e pesquise por “spooler” e coloque para Iniciar ou Reiniciar.</p>
          <img style={{ width: '100%', borderRadius: '4px' }} src={optionprinter}/>
        </div>

        <div style={{ background: '#f9fbff', border: '1px solid #cce0ff', padding: '20px', borderRadius: '6px' }}>
          <h3 style={{ color: '#0066cc', marginTop: 0 }}>Configurações de Usuários</h3>
          <p>
            Verifique em Menu &gt; Usuários e permissões se há configurações corretas de direcionamento de impressão por usuário ou Fila única.
          </p>
          <img style={{ width: '100%', borderRadius: '4px' }} src={usersforimp}/>
        </div>

      </div>
    </div>
  );
}