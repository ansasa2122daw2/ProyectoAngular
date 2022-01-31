import { Component } from '@angular/core';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})

export class juegoComponent {

  listaNombreJuego: Array<String>;
  listaValoracion: Array<Number>;

  constructor(){
    this.listaNombreJuego = ["Starcraft 2", ];
    this.listaValoracion = [5.00, ];
  }
}

