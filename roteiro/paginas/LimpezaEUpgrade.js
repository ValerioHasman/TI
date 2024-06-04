import { Component } from 'preact';
import h from "HTMLPreact";
import Cartao from '../componentes/Cartao.js';

export default class LimpezaEUpgrade extends Component {
  render() {
    return h`
<${Cartao}>
  <h2>Limpeza & Upgrade</h2>
  <p>Além de limpeza posso recomendar upgrades possivéis para sua maquina e instalar as peças.</p>
  <p>Pretende comprar um novo computador, notebook ou celular? Clique no <i class="bi bi-whatsapp" aria-labeledby="WhatsApp"></i> a baixo para conversarmos 😉.</p>
<//>
`;
  }
}