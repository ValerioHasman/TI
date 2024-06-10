import { Component } from 'preact';
import h from "HTMLPreact";
import pisca from '../uteis/piscaParaCarregarImagens.js';

export default class ItemCarrossel extends Component {
  render(props) {
    return h`
<div class="carousel-item ${pisca()} ${props?.active ? "active" : ""}" data-bs-interval="${props.tempo ?? 14000}">
  <span style="background-image: url(${props.src});" class="telaInteira imagemAoFundo overflow-y-auto d-block w-100">
    <div class="container pt-4">
      <div class="row justify-content-evenly pb-6">
        ${props.children}
      </div>
    </div>
  </span>
</div>
`;
  }
}