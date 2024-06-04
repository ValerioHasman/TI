import { Component } from 'preact';
import h from "HTMLPreact";
import Cartao from '../componentes/Cartao.js';

export default class Introducao extends Component{
  render(){
    return h`
<${Cartao}>
  <h2 class="card-title">Técnico em Informática</h2>
  <ul>
    <li>Aulas de Informática;</li>
    <li>Formatações e reinstalações Stock Rom;</li>
    <li>Instalações (apps, pacotes Offices…);</li>
    <li>Configuração;</li>
    <li>Limpezas de PCs e upgrades;</li>
    <li>Remoção de vírus;</li>
  </ul>
  <button type="button" data-bs-target="#carouselDeImagens" data-bs-slide-to="0" aria-label="Slide 2" class="btn btn-secondary bg-gradient">Ver tabela de Preços<i class="bi ms-2 bi-table"></i></button>
<//>
`
  }
}