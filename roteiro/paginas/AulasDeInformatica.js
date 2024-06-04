import { Component } from 'preact';
import h from "HTMLPreact";
import Cartao from '../componentes/Cartao.js';

export default class AulasDeInformatica extends Component {
  render() {
    return h`
<${Cartao}>
  <h2>Aulas De Informática</h2>
  <ul>
    <li>Utilização de Pacotes offices;</li>
    <li>A utilização de qualquer ferramenta;</li>
    <li>O uso do sistema;</li>
    <li>Instalação de aplicativos;</li>
    <li>Melhorar o desempenho da máquina;</li>
    <li>Programação web;</li>
  </ul>
<//>
`;
  }
}