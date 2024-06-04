import { Component } from 'preact';
import h from "HTMLPreact";
import { useState } from 'preact/hooks';

export default class Cartao extends Component{
  render(props){
    const [oculto, setOculto] = useState("");

    function ocultar(){
      setOculto("ocultar");
      setTimeout(() => {
        setOculto("ocultar d-none");
        setTimeout(() => {
          setOculto("ocultar");
          setTimeout(() => {
            setOculto("");
          }, 100);
        }, 10000);
      }, 1000);
    }

    return h`
<div class="col-sm col-md-8 col-lg-6 col-xxl-4 mb-3">
  <div class="card rounded-4 blur fadeinout ${oculto}">
    <div class="d-flex"><button onClick=${ocultar} type="button" class="btn btn-dark bg-transparent border-0 ms-auto rounded-3"><i class="bi bi-dash-lg"></i></button></div>
    <div class="card-body">${props.children}</div>
  </div>
</div>
`
  }
}