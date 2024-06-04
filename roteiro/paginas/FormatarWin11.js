import { Component } from 'preact';
import h from "HTMLPreact";
import Cartao from '../componentes/Cartao.js';

export default class FormatarWin11 extends Component {
  render() {
    return h`
<${Cartao}>
  <h2>Formatar para Windows 11</h2>
  <p>Instale a última verção do sistema atualizado e seguro da MicroSoft</p>
<//>
`;
  }
}