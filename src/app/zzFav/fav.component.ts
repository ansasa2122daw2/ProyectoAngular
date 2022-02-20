import { Component, Input } from '@angular/core';
import { mainComponent } from '../Main/main.component';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css'],
  animations: [],
})
export class favComponent {
  titulo: string;

  // arrayJuegos: [] = [];
  // // storage = localStorage.getItem('juegoTitulo');
  // imagen = localStorage.getItem('juegoImg');
  // rating = localStorage.getItem('juegoRating');
  // juegoTitulo = localStorage.getItem('titulo');

  // onClear() {
  //   localStorage.removeItem('juegoTitulo');
  //   localStorage.removeItem('juegoImg');
  //   localStorage.removeItem('juegoRating');
  //   localStorage.removeItem('titulo');
  // }
  constructor() {
    this.titulo = history.state.data.juegos.titulo;
  }

  ngOnInit() {
    //   for (let i = 0; i < localStorage['lenght']; i++) {
    //     localStorage.key(i);
    //     this.arrayJuegos.push(localStorage.getItem(localStorage.key(i)));
    //   }
  }
}
