import { Component } from '@angular/core';

@Component({
  selector: 'app-interfaz-datos-de-compra',
  templateUrl: './interfaz-datos-de-compra.component.html',
  styleUrls: ['./interfaz-datos-de-compra.component.css']
})
export class InterfazDatosDeCompraComponent {
correo:string="";
  texto:string="";
  direccion:string="";
  telefono:string="";
  ciudad:string="";
  formadepago:string="";
  aceptar:string="";
  reconoceCosas(){
    this.texto=this.correo+(" ")+this.direccion+(" ")+this.telefono+(" ")+this.ciudad+(" ")+this.formadepago+(" ")+this.aceptar;
  }

}
