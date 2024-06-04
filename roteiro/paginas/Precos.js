import { Component } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import h from "HTMLPreact";
import Cartao from '../componentes/Cartao.js';

export default class Precos extends Component {

  render() {
    const [tabelaDePrecos, setTabelaDePrecos] = useState([]);

    useEffect(() => {
      listarEm(setTabelaDePrecos);
    }, []);

    return h`
<${Cartao}>
  <h2 class="card-title">Tabela de preços</h2>
  <table class="table table-hover table-borderless">
    <thead>
      <tr>
        <th scope="col">Serviços</th>
        <th scope="col">R$</th>
      </tr>
    </thead>
    <tbody>${tabelaDePrecos}</tbody>
  </table>
<//>
`
  }
}

function listarEm(estado) {
  void fetch('./tabelaDePrecos.json')
    .then(res => res.json())
    .then((res) => {
      let lista = [];
      res.forEach(element => {
        lista.push(h`<tr><td>${element.servico}</td><td class="text-end text-normal font-monospace">${element.preco}</td></tr>`);
      });
      estado(lista);
    })

}