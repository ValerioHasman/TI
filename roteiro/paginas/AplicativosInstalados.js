import { Component } from 'preact';
import h from "HTMLPreact";
import Cartao from '../componentes/Cartao.js';

export default class AplicativosInstalados extends Component {
  render() {
    return h`
<${Cartao}>
  <h2>Apps fornecidos ao Formatar</h2>
  <h3>Windows</h3>
  <ul>
    <li>Google Chrome;</li>
    <li>LibreOffice;</li>
    <li>OnlyOffice;</li>
  </ul>
  <h3>Zorin</h3>
  <ul>
    <li>Google Chrome;</li>
    <li>LibreOffice;</li>
    <li>OnlyOffice;</li>
    <li>KolourPaint;</li>
  </ul>
  <h3>Apps de sua preferência</h3>
  <p>Requer que não sejam necessários crackers, pois causam lentidão e são portas de entrada para vírus. Busco, assim, alternativas gratuitas e seguras para as atividades necessárias.</p>
<//>
`;
  }
}