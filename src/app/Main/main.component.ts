import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  animateChild,
  group,
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

  irJuego(juego: Juego): void {
    this.router.navigate(['/juego'], {
      state: { data: { juegos: juego } },
    });
  }

  constructor(private route: ActivatedRoute, private router: Router) {
    this.juegos = '';
    let Sims4: Juego = {
      titulo: 'Sims 4',
      rating: 60,
      isTopJuego: false,
      compañia: 'EA',
      plataforma: 'PC',
      genero: 'Simulacion',
      imagen: '../../assets/sims.jpg',
      descripcion: '',
    };
    let RDR2: Juego = {
      titulo: 'Red dead redemption 2',
      rating: 94,
      isTopJuego: true,
      compañia: 'Rockstar',
      plataforma: 'PC, Xbox-One',
      genero: 'Aventura',
      imagen: '../../assets/RDR2.jpg',
      descripcion: '',
    };
    let STARC2: Juego = {
      titulo: 'Starcraft 2',
      rating: 80,
      isTopJuego: false,
      compañia: 'Blizzard',
      plataforma: 'PC',
      genero: 'Estrategia',
      imagen: '../../assets/SC2.jpg',
      descripcion: '',
    };
    let MARIOOD: Juego = {
      titulo: 'Super mario odissey',
      rating: 90,
      isTopJuego: true,
      compañia: 'Nintendo',
      plataforma: 'Switch',
      genero: 'Aventura',
      imagen: '../../assets/MARIOOD.jpg',
      descripcion: '',
    };
    let ACNH: Juego = {
      titulo: 'Animal crossing new horizons',
      rating: 80,
      isTopJuego: false,
      compañia: 'Nintendo',
      plataforma: 'Switch',
      genero: 'Simulacion',
      imagen: '../../assets/ACNH.jpg',
      descripcion: '',
    };
    let ITTTWO: Juego = {
      titulo: 'It takes two',
      rating: 89,
      isTopJuego: true,
      compañia: 'EA',
      plataforma: 'PC',
      genero: 'Aventura',
      imagen: '../../assets/ITTTWO.jpg',
      descripcion: '',
    };
    let OW: Juego = {
      titulo: 'Overwatch',
      rating: 30,
      isTopJuego: false,
      compañia: 'BLIZZARD',
      plataforma: 'PC',
      genero: 'Aventura',
      imagen: '../../assets/OW.jpg',
      descripcion: '',
    };
    let UNRAVEL: Juego = {
      titulo: 'Unravel',
      rating: 75,
      isTopJuego: false,
      compañia: 'EA',
      plataforma: 'PC',
      genero: 'Aventura',
      imagen: '../../assets/UNRAVEL.jpg',
      descripcion: '',
    };
    let ZELDA: Juego = {
      titulo: 'Zelda breath of the wild',
      rating: 85,
      isTopJuego: false,
      compañia: 'EA',
      plataforma: 'Switch',
      genero: 'Aventura',
      imagen: '../../assets/zelda.jpg',
      descripcion: '',
    };
    let GTAV: Juego = {
      titulo: 'Grand theft auto 5',
      rating: 98,
      isTopJuego: true,
      compañia: 'Rockstar Games',
      plataforma: 'PC',
      genero: 'Aventura',
      imagen: '../../assets/GTA5.jpg',
      descripcion:
        'Grand Theft Auto V para PC es un juego de acción y aventuras, el quinto de la serie GTA. Como ya es tradición en los juegos de esta serie, se obtienen puntos mediante la comisión de delitos. El juego alterna entre la narrativa visual y la jugabilidad en tercera y en primera persona. El jugador toma el papel de tres criminales tratando de huir de una determinada agencia del gobierno y cometiendo asaltos. No se elige un solo personaje para jugar, la narrativa del juego salta de un personaje a otro.',
    };
    let FLIGHTS: Juego = {
      titulo: 'Microsoft flight simulator',
      rating: 78,
      isTopJuego: false,
      compañia: 'Microsoft, Xbox-One',
      plataforma: 'PC',
      genero: 'Aventura',
      imagen: '../../assets/FLIGHTS.jpg',
      descripcion: '',
    };
    let TLASTOFUS2: Juego = {
      titulo: 'The last of us II',
      rating: 73,
      isTopJuego: false,
      compañia: 'Sony',
      plataforma: 'PS5',
      genero: 'Aventura',
      imagen: '../../assets/TLASTOFUS2.jpg',
      descripcion: '',
    };
    let GHOSTOFT: Juego = {
      titulo: 'Ghost of tsushima',
      rating: 88,
      isTopJuego: false,
      compañia: 'Sony',
      plataforma: 'PS5',
      genero: 'Aventura',
      imagen: '../../assets/GHOSTOFT.jpg',
      descripcion: '',
    };
    let FORZAHORIZON5: Juego = {
      titulo: 'Forza horizon 5',
      rating: 90,
      isTopJuego: false,
      compañia: 'Microsoft',
      plataforma: 'PC, Xbox-One',
      genero: 'Aventura',
      imagen: '../../assets/FORZAHORIZON5.jpg',
      descripcion: '',
    };
    let REVILLAGE: Juego = {
      titulo: 'Resident evil: Village',
      rating: 82,
      isTopJuego: false,
      compañia: 'SONY',
      plataforma: 'PC, Xbox-One, PS5',
      genero: 'Terror',
      imagen: '../../assets/REVILLAGE.jpg',
      descripcion: '',
    };
    let ALIENISOLATION: Juego = {
      titulo: 'Alien Isolation',
      rating: 79,
      isTopJuego: false,
      compañia: 'Microsoft',
      plataforma: 'PC, Xbox-One',
      genero: 'Terror',
      imagen: '../../assets/ALIENISOLATION.jpg',
      descripcion: '',
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
  descripcion: string;
}
