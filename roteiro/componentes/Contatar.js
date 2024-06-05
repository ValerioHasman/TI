import { Component } from 'preact';
import { useState } from 'preact/hooks';
import h from "HTMLPreact";

/** @implements {ShareData} */
class Compartilhavel {
  get title() { return "Valério T.I."; }
  get text() { return "Informática & Tecnologia"; }
  get url() { return location.origin + location.pathname; }
  toString() { return this.title + "\n" + this.text + "\n" + this.url + "\n"; }
}

function saudar() {
  return encodeURIComponent(`Olá, Valério, ${(() => {
      const hora = new Date().getHours();
      if (hora < 5) {
        return "boa noite 💤";
      }
      if (hora < 12) {
        return "bom dia";
      }
      if (hora < 18) {
        return "boa tarde";
      }
      return "boa noite";
    })()
    }.\n`);
}

export default class Contatar extends Component {
  static conteudoCompartilhar = new Compartilhavel();

  render() {
    const [icone, setIcone] = useState("bi-share");

    function compartilhar(event) {
      event.preventDefault();
      if (navigator.share) {
        navigator.share(Contatar.conteudoCompartilhar)
          .catch((err) => {
            copiar();
          });
      } else {
        copiar();
      }
    }

    function copiar() {
      navigator.clipboard.writeText(Contatar.conteudoCompartilhar);
      setIcone("bi-copy");
      setTimeout(() => { setIcone("bi-share"); }, 2400);
    }

    return h`
<div class="container-fluid fixed-bottom py-2 blur">
  <div class="fs-1 row text-center">
    <div class="col px-1">
      <a class="rounded-4 bg-links d-block" href="#" aria-label="Celular"
        onClick=${compartilhar}>
        <i class="bi ${icone}"></i>
      </a>
    </div>
    <div class="col px-1">
      <a class="rounded-4 bg-links d-block" href="tel:+5512997329785" aria-label="Celular"
        target="_blank">
        <i class="bi  bi-telephone"></i>
      </a>
    </div>
    <div class="col px-1">
      <a class="rounded-4 bg-links d-block"
        href="https://wa.me/5512997329785?text=${saudar()}" aria-label="WhatsApp" target="_blank">
        <i class="bi bi-whatsapp"></i>
      </a>
    </div>
  </div>
</div>
`;
  }
}

