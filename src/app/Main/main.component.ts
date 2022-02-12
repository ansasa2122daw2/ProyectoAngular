import { Component, Input } from '@angular/core';

import { HostBinding } from '@angular/core';
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
  selector: 'app-sidebar',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('images', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(100px)' }),
            stagger(
              '50ms',
              animate(
                '600ms ease-out',
                style({ opacity: 1, transform: 'translateY(0)' })
              )
            ),
          ],
          { optional: true }
        ),
        query(
          ':leave',
          [
            style({ opacity: 1, transform: 'translateY(0)' }),
            stagger(
              '50ms',
              animate(
                '600ms ease-out',
                style({ opacity: 0, transform: 'translateY(100px)' })
              )
            ),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class mainComponent {
  @Input() juegos: String;

  arrayJuegos: Juego[] = [];
  arrayTopJuegos: Juego[] = [];

  constructor() {
    this.juegos = '';
    let Sims4: Juego = {
      titulo: 'SIMS 4',
      rating: 60,
      isTopJuego: false,
      compañia: 'EA',
      plataforma: 'PC',
      genero: 'Simulacion',
      imagen: '../../assets/sims.jpg',
    };
    let RDR2: Juego = {
      titulo: 'RED DEAD REDEMPTION 2',
      rating: 94,
      isTopJuego: true,
      compañia: 'Rockstar',
      plataforma: 'PC, Xbox-One',
      genero: 'Aventura',
      imagen: '../../assets/RDR2.jpg',
    };
    let STARC2: Juego = {
      titulo: 'STARCRAFT 2',
      rating: 80,
      isTopJuego: false,
      compañia: 'Blizzard',
      plataforma: 'PC',
      genero: 'Estrategia',
      imagen: '../../assets/SC2.jpg',
    };
    let MARIOOD: Juego = {
      titulo: 'SUPER MARIO ODYSSEY',
      rating: 90,
      isTopJuego: true,
      compañia: 'Nintendo',
      plataforma: 'Switch',
      genero: 'Aventura',
      imagen: '../../assets/MARIOOD.jpg',
    };
    let ACNH: Juego = {
      titulo: 'ANIMAL CROSSING NEW HORIZONS',
      rating: 80,
      isTopJuego: false,
      compañia: 'Nintendo',
      plataforma: 'Switch',
      genero: 'Simulacion',
      imagen: '../../assets/ACNH.jpg',
    };
    let ITTTWO: Juego = {
      titulo: 'IT TAKES TWO',
      rating: 89,
      isTopJuego: true,
      compañia: 'EA',
      plataforma: 'PC',
      genero: 'Aventura',
      imagen: '../../assets/ITTTWO.jpg',
    };
    let OW: Juego = {
      titulo: 'OVERWATCH',
      rating: 30,
      isTopJuego: false,
      compañia: 'BLIZZARD',
      plataforma: 'PC',
      genero: 'Aventura',
      imagen: '../../assets/OW.jpg',
    };
    let UNRAVEL: Juego = {
      titulo: 'UNRAVEL',
      rating: 75,
      isTopJuego: false,
      compañia: 'EA',
      plataforma: 'PC',
      genero: 'Aventura',
      imagen: '../../assets/UNRAVEL.jpg',
    };
    let ZELDA: Juego = {
      titulo: 'ZELDA BREATH OF THE WILD',
      rating: 85,
      isTopJuego: false,
      compañia: 'EA',
      plataforma: 'Switch',
      genero: 'Aventura',
      imagen: '../../assets/zelda.jpg',
    };
    let GTAV: Juego = {
      titulo: 'GRAND THEFT AUTO 5',
      rating: 98,
      isTopJuego: true,
      compañia: 'Rockstar Games',
      plataforma: 'PC',
      genero: 'Aventura',
      imagen: '../../assets/GTA5.jpg',
    };
    let FLIGHTS: Juego = {
      titulo: 'MICROSOFT FLIGHT SIMULATOR',
      rating: 78,
      isTopJuego: false,
      compañia: 'Microsoft, Xbox-One',
      plataforma: 'PC',
      genero: 'Aventura',
      imagen: '../../assets/FLIGHTS.jpg',
    };
    let TLASTOFUS2: Juego = {
      titulo: 'THE LAST OF US II',
      rating: 73,
      isTopJuego: false,
      compañia: 'Sony',
      plataforma: 'PS5',
      genero: 'Aventura',
      imagen: '../../assets/TLASTOFUS2.jpg',
    };
    let GHOSTOFT: Juego = {
      titulo: 'GHOST OF TSUSHIMA',
      rating: 88,
      isTopJuego: false,
      compañia: 'Sony',
      plataforma: 'PS5',
      genero: 'Aventura',
      imagen: '../../assets/GHOSTOFT.jpg',
    };
    let FORZAHORIZON5: Juego = {
      titulo: 'FORZA HORIZON 5',
      rating: 90,
      isTopJuego: false,
      compañia: 'Microsoft',
      plataforma: 'PC, Xbox-One',
      genero: 'Aventura',
      imagen: '../../assets/FORZAHORIZON5.jpg',
    };
    let REVILLAGE: Juego = {
      titulo: 'RESIDENT EVIL: VILLAGE',
      rating: 82,
      isTopJuego: false,
      compañia: 'SONY',
      plataforma: 'PC, Xbox-One, PS5',
      genero: 'Terror',
      imagen: '../../assets/REVILLAGE.jpg',
    };
    let ALIENISOLATION: Juego = {
      titulo: 'ALIEN ISOLATION',
      rating: 79,
      isTopJuego: false,
      compañia: 'Microsoft',
      plataforma: 'PC, Xbox-One',
      genero: 'Terror',
      imagen: '../../assets/ALIENISOLATION.jpg',
    };

    this.arrayTopJuegos.push(GTAV);
    this.arrayTopJuegos.push(RDR2);
    this.arrayTopJuegos.push(MARIOOD);
    this.arrayTopJuegos.push(ITTTWO);
    this.arrayJuegos.push(Sims4);
    this.arrayJuegos.push(ACNH);
    this.arrayJuegos.push(ALIENISOLATION);
    this.arrayJuegos.push(UNRAVEL);
    this.arrayJuegos.push(ZELDA);
    this.arrayJuegos.push(STARC2);
    this.arrayJuegos.push(FLIGHTS);
    this.arrayJuegos.push(TLASTOFUS2);
    this.arrayJuegos.push(GHOSTOFT);
    this.arrayJuegos.push(FORZAHORIZON5);
    this.arrayJuegos.push(REVILLAGE);
    this.arrayJuegos.push(OW);
  }

  ngOnInit(): void {}

  // this.arrayJuegos.find(PC);Se hará un filter para el checkbox y los juegos
}

export interface Juego {
  titulo: string;
  rating: number;
  isTopJuego: boolean;
  compañia: string;
  plataforma: string;
  genero: string;
  imagen: string;
}
