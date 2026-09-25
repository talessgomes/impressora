import { 
  FirstSection,
   H3Color,
  SecondSection, 
  ThirdSection,
  ImgSpooler,
  ImgLine,
  ImgMacro} from "./styled";
import services from "../../assets/images/troubleshooting/services.png";
import pageFail from "../../assets/images/troubleshooting/pageFail.png";
import lineImpression from "../../assets/images/troubleshooting/lineImpression.png";

export const Troubleshooting = () => {
  return (
    <div>
      <h2>Impressoras: Erros Conhecidos e Como Proceder</h2>
      <FirstSection>
        <H3Color>Conexão USB</H3Color>
        <p>
          Em 'Windows + R' &gt; 'Control Printers' &gt; 'Propriedades da impressora' 
          (Para Windows 11, Windows + R &gt; Control Printers &gt; Dispositivos &gt; 
          Mais dispositivos e configurações de impressora OU Windows + R &gt; shell:::{"{A8A91A66-3A7D-4424-8D24-04E180695C7A}"}), 
          realizar o envio da página teste do Windows para validar o funcionamento da impressora.
        </p>
        <p>
          Caso não dê certo.
        </p>
        <p>
          Em 'Windows + R &gt; Control Printers &gt; Propriedades da impressora',
           verificar se a porta COM da impressora está selecionada corretamente 
           (pode ser necessário testar impressões selecionando portas diferentes);
          </p>
          <p>
            Caso a porta esteja correta, clique em ‘Ver o que está sendo impresso &gt; Impressora &gt; Cancelar todos os documentos’,
             após, vá em ‘Windows &gt; Serviços’ pesquise por spooler de impressão e pause o serviço,
              depois, abra a pasta C:\Windows\System32\spool\PRINTERS,
             delete todos os documento e inicie novamente o serviço de spooler.
          </p>
          <ImgSpooler src={services} alt ="Serviços do windows(Reiniciar o Spooler)"/>
          <p>
            Caso a impressora não volte a imprimir após a limpeza de spooler,
             solicite que o cliente troque a porta USB em que a impressora está conectada ao PC,
              reiniciando e reconectando todos os cabos da impressora. Macro abaixo.
          </p>
          <ImgMacro src={pageFail} alt="Macro de página teste não saiu" />

      </FirstSection>
      <SecondSection>
        <H3Color>Conexão de Rede</H3Color>
        <p>Em impressoras de rede, a porta é o IP da impressora. 
          Solicite ao cliente um autoteste para confirmar
           se o IP foi alterado por quedas de luz/internet e ajuste nas propriedades da porta TCP/IP se necessário.
           </p>
           <p>
            Caso o ip da porta da impressora esteja correto, 
            clique em ‘Ver o que está sendo impresso &gt; Impressora &gt; Cancelar todos os documentos’,
             após, vá em ‘Windows &gt; Serviços’ pesquise por spooler de impressão e pause o serviço, depois,
             abra a pasta C:\Windows\System32\spool\PRINTERS, delete todos os documentos e inicie novamente o serviço de spooler.
           </p>
           <ImgMacro src={pageFail} alt="Macro de página teste não saiu" />
           <p>
            Caso o ip da porta da impressora esteja diferente da do ip do autoteste, 
            realize a mudança do ip na porta da impressora clicando em ‘Propriedades da impressora &gt; Portas &gt; Configurar Porta’.
            - Caso o ip informado no autoteste não tenha sido encontrado já configurado nas demais portas,
            clique em ‘Propriedades da impressora &gt; Portas &gt; Adicionar Porta &gt; Standard TCP/IP Port &gt; informe o ip e avançe.
           </p>
           <p>
            Caso mesmo assim a impressora apresentar erro,
             encaminhar o cliente a um técnico local para a instalação da impressora e verificação da infraestrutura local.
            </p>
      </SecondSection>

      <ThirdSection>
        <H3Color>Saipos Garçom</H3Color>
        <p>
          No momento em que o cliente relatar que as impressões do App Garçom não estão funcionando,
           questione qual o usuário que realiza as impressões no sistema por padrão e pergunte qual usuário não está imprimindo.
          </p>    
        <p>
          Após o cliente responder às perguntas,
           valide se o usuário App Garçom está redirecionando para o usuário do tipo Loja correto conforme imagem abaixo:
        </p>
        <ImgLine src={lineImpression} alt="Fila de usuários"/>
        <p>
          Caso não esteja imprimindo ainda, verifique o horário do celular que está utilizando
           o App Garçom e o horário que está no computador do cliente, pois uma divergência de horários
            implica na não impressão das vias de cozinha.
        </p>
        <p>
          Caso o horário esteja correto, mas a impressão não esteja funcionando,
           solicite acesso ao computador do cliente e faça as verificações necessárias indicadas no tópico Saipos Printer.
        </p>
      </ThirdSection>        
    </div>
  );
}