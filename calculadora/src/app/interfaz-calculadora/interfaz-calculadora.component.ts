import { Component } from '@angular/core';

@Component({
  selector: 'app-interfaz-calculadora',
  templateUrl: './interfaz-calculadora.component.html',
  styleUrls: ['./interfaz-calculadora.component.css']
})
export class InterfazCalculadoraComponent {
  numero1:number=0;
  numero2:number=0;
  calculo:number=0;
  mensaje:string="";
 suma():void{
   this.calculo = this.numero1 + this.numero2;
   this.mensaje= "La suma es " + this.calculo;
 }
 resta():void{
   this.calculo = this.numero1 - this.numero2;
   this.mensaje="La resta es " + this.calculo;
 }
 multiplicacion():void{
   this.calculo = this.numero1 * this.numero2;
   this.mensaje="La multiplicacion es " + this.calculo;
 }
 division():void{
   this.calculo = this.numero1 / this.numero2;
   this.mensaje="La division es " + this.calculo;
 }
 }
 