import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  entrada: string;
  resultado: string;

  constructor( ){
    this.resultado = "";
  }

  convertirATexto(){
    this.resultado = "";
    let entradaArray = this.entrada.split(' ');
    for( let i = 0; i < entradaArray.length; i++ ){
      this.resultado += String.fromCharCode(parseInt(entradaArray[i]));
    }
  }

  convertirAAscii(){
    this.resultado = "";
     for( let i = 0; i < this.entrada.length; i++ ){
      this.resultado += this.entrada.charCodeAt(i) + " ";
    }
  }

}
