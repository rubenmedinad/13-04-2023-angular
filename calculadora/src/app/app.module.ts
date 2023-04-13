import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InterfazCalculadoraComponent } from './interfaz-calculadora/interfaz-calculadora.component';
import { FormsModule } from '@angular/forms';
import { XyzComponent } from './xyz/xyz.component';
import { InterfazdivisasComponent } from './interfazdivisas/interfazdivisas.component';
import { InterfazDatosDeCompraComponent } from './interfaz-datos-de-compra/interfaz-datos-de-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    InterfazCalculadoraComponent,
    XyzComponent,
    InterfazdivisasComponent,
    InterfazDatosDeCompraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
