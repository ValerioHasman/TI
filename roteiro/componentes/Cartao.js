import { Component } from 'preact';
import h from "HTMLPreact";

export default class Cartao extends Component{
  render(props){
    return h`
<div class="card rounded-4 blur col-sm col-md-8 col-lg-6 col-xxl-4 mb-3">
  <div class="card-body">${props.children}</div>
</div>
`
  }
}