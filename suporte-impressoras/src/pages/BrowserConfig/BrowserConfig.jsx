import browserImg from "../../assets/images/browser/browser.png"
import {Img} from "./styled"

export default function BrowserConfig() {
  return (
    <div>
      <h2>Configurações de Navegador</h2>
      <p>Caso o cliente relate que, ao realizar impressões, está abrindo o bloco de notas (Notepad) para as vias da Saipos, siga o procedimento no navegador Chrome:</p>
      <ul>
        <li>Clique nos três pontos na parte superior para abrir as opções e busque por <strong>Configurações</strong>.</li>
        <li>Acesse a configuração de <strong>Downloads</strong>.</li>
        <li>Desmarque a opção <strong>"Perguntar onde salvar cada arquivo antes de fazer download"</strong>.</li>
      </ul>
      <Img src={browserImg}/>
    </div>
  );
}