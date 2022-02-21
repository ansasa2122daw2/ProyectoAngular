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
    trigger('fadeInAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(100px)' }),
            stagger(
              '50ms',
              animate(
                '2000ms ease-out',
                style({ opacity: 10, transform: 'translateY(0)' })
              )
            ),
          ],
          { optional: true }
        ),
      ]),
    ]),
    trigger('boton', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(3000)]),
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
