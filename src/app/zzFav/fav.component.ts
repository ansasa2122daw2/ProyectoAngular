import { Component, Input } from '@angular/core';
import { mainComponent } from '../Main/main.component';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css'],
  animations: [],
})
export class favComponent {
  // storage = localStorage.getItem('juegoTitulo');
  imagen = localStorage.getItem('juegoImg');
  rating = localStorage.getItem('juegoRating');
  juegoTitulo = localStorage.getItem('titulo');
  //this.arrayShow.push(juegoTitulo);

  onClear() {
    localStorage.removeItem('juegoTitulo');
    localStorage.removeItem('juegoImg');
    localStorage.removeItem('juegoRating');
  }
  constructor() {}

  ngOnInit() {}
}
