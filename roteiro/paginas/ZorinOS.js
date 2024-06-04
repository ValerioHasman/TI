import { Component } from 'preact';
import h from "HTMLPreact";
import Cartao from '../componentes/Cartao.js';

export default class ZorinOS extends Component {
  render() {
    return h`
<${Cartao}>
  <h2>Formatar para Zorin OS Core</h2>
  <p>Zorin OS é a alternativa ao Windows e macOS projetada para tornar seu computador mais rápido, mais poderoso, seguro e que respeita a privacidade.</p>
<//>
`;
  }
}