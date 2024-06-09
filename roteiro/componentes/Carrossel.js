import { Component } from 'preact';
import h from "HTMLPreact";
import ItemCarrossel from './ItemCarrossel.js';
import Introducao from '../paginas/Introducao.js';
import Precos from '../paginas/Precos.js';
import FormatarWin11 from '../paginas/FormatarWin11.js';
import ZorinOS from '../paginas/ZorinOS.js';
import AplicativosInstalados from '../paginas/AplicativosInstalados.js';
import LimpezaEUpgrade from '../paginas/LimpezaEUpgrade.js';
import ReinstalarStockRom from '../paginas/ReinstalarStockRom.js';
import AulasDeInformatica from '../paginas/AulasDeInformatica.js';

export default class Carrossel extends Component {
  render() {
    return h`
<div id="carouselDeImagens" class="carousel slide bg-secondary" data-bs-ride="carousel">
  <div class="carousel-inner">
    <${ItemCarrossel} src="./midias/banner/preco.png"><${Precos} /><//>
    <${ItemCarrossel} src="./midias/banner/inicio.png" tempo="3000" active><${Introducao} /><//>
    <${ItemCarrossel} src="./midias/banner/win11.png" tempo="7000"><${FormatarWin11} /><//>
    <${ItemCarrossel} src="./midias/banner/ZorinOS.png"><${ZorinOS} /><//>
    <${ItemCarrossel} src="./midias/banner/appsinstalados.png"><${AplicativosInstalados} /><//>
    <${ItemCarrossel} src="./midias/banner/appparou.png"><${ReinstalarStockRom} /><//>
    <${ItemCarrossel} src="./midias/banner/aulas.png"><${AulasDeInformatica} /><//>
    <${ItemCarrossel} src="./midias/banner/limpeza.png"><${LimpezaEUpgrade} /><//>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselDeImagens" data-bs-slide="prev">
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next h-75 mt-auto" type="button" data-bs-target="#carouselDeImagens" data-bs-slide="next">
    <span class="carousel-control-next-icon mt-auto trocacornext" style="margin-bottom: calc((1.375rem + 1.5vw)* 3) !important;" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
`;
  }
}
