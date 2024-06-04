import h from "HTMLPreact";
import { createElement, render } from 'preact';
import * as bootstrap from 'bootstrap';

import Carrossel from "./componentes/Carrossel.js";
import Contatar from "./componentes/Contatar.js";

function App() {
  return h`
    <div class="container-fluid px-0">
      <${Carrossel} />
      <${Contatar} />
    </div>
  `;
};

render(createElement(App), document.body);