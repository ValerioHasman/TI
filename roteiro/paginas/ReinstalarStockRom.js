import { Component } from 'preact';
import h from "HTMLPreact";
import Cartao from '../componentes/Cartao.js';

export default class ReinstalarStockRom extends Component {
  render() {
    return h`
<${Cartao}>
  <h2>Reinstalar Stock Rom do Android</h2>
  <p>O seu celular está travando? Com telas de o aplicativo parou?</p>
  <p>A solução é reinstalar Stock Rom do aparelho, fazendo com que ele volte a funcionar como no primeiro dia tirado da caixa.</p>
<//>
`;
  }
}