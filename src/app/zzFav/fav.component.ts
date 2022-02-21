import { Component, Input } from '@angular/core';
import { mainComponent } from '../Main/main.component';
import { Router, ActivatedRoute } from '@angular/router';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  stagger,
  query,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css'],
  animations: [
    trigger('enterState', [
      transition('* => open', [animate('1s', style({ opacity: '*' }))]),
    ]),
  ],
})
export class favComponent {
  arrayLista: any[] = [];
  arrayJuegos = localStorage.getItem('juegos');

  if(arrayJuegos: string) {
    this.arrayLista = JSON.parse(arrayJuegos);
  }

  onClear() {
    localStorage.removeItem('juegos');
    this.arrayLista.splice(0, 99999);
    this.conseguirFavs();
  }

  irJuego(juego: Juego): void {
    this.router.navigate(['/juego'], {
      state: { data: { juegos: juego } },
    });
  }
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.conseguirFavs();
  }

  conseguirFavs() {
    const favs = localStorage.getItem('juegos');
    if (favs) {
      this.arrayLista = JSON.parse(favs);
    }
  }
}

export interface Juego {
  titulo: string;
  rating: number;
  isTopJuego: boolean;
  compañia: string;
  plataforma: string;
  genero: string;
  imagen: string;
  video: string;
  descripcion: string;
}
