import { Component, Input } from '@angular/core';
import { mainComponent } from '../Main/main.component';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css'],
  animations: [],
})
export class favComponent {
  arrayJuegos: any[] = [];
  juego: any;
  storage = localStorage.getItem('juegoTitulo');
  imagen = localStorage.getItem('juegos.imagen');
  rating = localStorage.getItem('juegoRating');
  juegoTitulo = localStorage.getItem('juegos.titulo');
  //juegoTitulo = JSON.parse(localStorage.getItem('juegos'));

  onClear() {
    localStorage.removeItem('juegoTitulo');
    localStorage.removeItem('juegoImg');
    localStorage.removeItem('juegoRating');
    localStorage.removeItem('titulo');
  }
  constructor() {
    this.juegoTitulo = '';
    this.juego = '';
  }

  ngOnInit() {
    for (let i = 0; i < localStorage.length; i++) {
      this.juego = { titulo: this.juegoTitulo };
      this.arrayJuegos.push(this.juego);
    }
    console.log(this.juego);
    console.log(this.arrayJuegos);
  }
}
