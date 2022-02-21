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
import { CompilerOptionsValue } from 'typescript';

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
  busquedaPost = '';

  arrayJuegos: Juego[] = [];
  arrayTopJuegos: Juego[] = [];
  arrayOnSave: Juego[] = [];

  irJuego(juego: Juego): void {
    this.router.navigate(['/juego'], {
      state: { data: { juegos: juego } },
    });
  }

  onSave(juego: Juego) {
    this.arrayOnSave.push(juego);
    localStorage.setItem('juegos', JSON.stringify(this.arrayOnSave));

    console.log(this.arrayOnSave);
  }

  constructor(private route: ActivatedRoute, private router: Router) {
    // this.arrayOnSave = [];
    this.juegos = '';
    let Sims4: Juego = {
      titulo: 'Sims 4',
      rating: 60,
      isTopJuego: false,
      compañia: 'EA',
      plataforma: 'PC',
      genero: 'Simulacion',
      imagen: '../../assets/sims.jpg',
      video: '../../assets/sims4.mp4',
      descripcion:
        'Los Sims 4 para PC es un juego de control y simulación de vida, el juego más vendido de 2014 y 2015, y que durante un tiempo se ubicó en lo más alto de las listas de éxitos en todos los formatos disponibles. Hoy en día podemos encontrar una gran variedad de juegos de los Sims, desde los juegos principales de la serie (como éste), hasta los paquetes de expansión y complementos que suelen ser lanzados con frecuencia: todos dando prueba de la persistente popularidad de la serie.',
    };
    let RDR2: Juego = {
      titulo: 'Red dead redemption 2',
      rating: 94,
      isTopJuego: true,
      compañia: 'Rockstar',
      plataforma: 'PC, Xbox-One',
      genero: 'Aventura',
      imagen: '../../assets/RDR2.jpg',
      video: '../../assets/rdr2_trailer.mp4',
      descripcion:
        'Red Dead Redemption 2 es un juego de acción y aventuras de mundo abierto en el que el jugador puede vagar libremente. Cuenta algunos elementos en tercera persona, además de otras modalidades de juego en primera persona. El jugador puede cometer crímenes, pero de hacerlo deberá estar preparado para ser perseguido por las fuerzas del orden, ¡quienes estarán dispuestas a hacer valer todo el peso de la ley sobre los delincuentes!',
    };
    let STARC2: Juego = {
      titulo: 'Starcraft 2',
      rating: 80,
      isTopJuego: false,
      compañia: 'Blizzard',
      plataforma: 'PC',
      genero: 'Estrategia',
      imagen: '../../assets/SC2.jpg',
      video: '../../assets/sc2.mp4',
      descripcion:
        'Starcraft 2: Wings of Liberty es un juego de estrategia en tiempo real de ciencia ficción. También es una secuela: del juego original, de la serie de Brood War y la primera secuela de Starcraft, y ahora también incluye un pack de expansión considerable que se lanzó por partes después del lanzamiento original.',
    };
    let MARIOOD: Juego = {
      titulo: 'Super mario odissey',
      rating: 90,
      isTopJuego: true,
      compañia: 'Nintendo',
      plataforma: 'Switch',
      genero: 'Aventura',
      imagen: '../../assets/MARIOOD.jpg',
      video: '../../assets/mariood_trailer.mp4',
      descripcion:
        'Super Mario Odyssey para Nintendo Switch es un simpático juego de plataformas en 3D basado en la recolección de lunas que cuenta con una jugabilidad innovadora pero a la vez reconfortantemente familiar, ¡la cual te ofrecerá diversión por montones!',
    };
    let ACNH: Juego = {
      titulo: 'Animal crossing new horizons',
      rating: 80,
      isTopJuego: false,
      compañia: 'Nintendo',
      plataforma: 'Switch',
      genero: 'Simulacion',
      imagen: '../../assets/ACNH.jpg',
      video: '../../assets/acnh.mp4',
      descripcion:
        'Animal Crossing: New Horizons para Nintendo Switch es un juego de simulación que es principalmente para un jugador con algunos elementos multijugador y es la quinta entrega del juego que presenta la cara familiar y querida de Tom Nook, esta vez en una isla desierta. Al igual que con los otros juegos de Animal Crossing, construirás tu hogar, conocerás y ayudarás a tus vecinos y amigos animales y juntos construiréis una comunidad.',
    };
    let ITTTWO: Juego = {
      titulo: 'It takes two',
      rating: 89,
      isTopJuego: true,
      compañia: 'EA',
      plataforma: 'PC',
      genero: 'Aventura',
      imagen: '../../assets/ITTTWO.jpg',
      video: '../../assets/ittw2.mp4',
      descripcion:
        'Embárcate en la aventura más loca de tu vida con It Takes Two, un juego de plataformas multigénero exclusivamente cooperativo. Invita a un amigo a acompañarte gratis con el Pase de amigo* para colaborar en una gran variedad de desafíos deliciosamente rompedores. Métete en la piel de Cody y May, una conflictiva pareja de humanos convertidos en muñecos por un hechizo. Juntos, atrapados en un mundo fantástico donde lo impredecible aguarda a cada paso, deberán intentar a regañadientes salvar su relación rota.',
    };
    let OW: Juego = {
      titulo: 'Overwatch',
      rating: 30,
      isTopJuego: false,
      compañia: 'BLIZZARD',
      plataforma: 'PC',
      genero: 'Aventura',
      imagen: '../../assets/OW.jpg',
      video: '../../assets/overwatch.mp4',
      descripcion:
        'Overwatch para PC es un shooter multijugador en primera persona basado en equipos. Ha sido Desarrollado por Blizzard Entertainment, también son conocidos por los muy populares juegos de World of Warcraft y sus spin-offs.',
    };
    let UNRAVEL: Juego = {
      titulo: 'Unravel',
      rating: 75,
      isTopJuego: false,
      compañia: 'EA',
      plataforma: 'PC',
      genero: 'Aventura',
      imagen: '../../assets/UNRAVEL.jpg',
      video: '../../assets/unravel.mp4',
      descripcion:
        'Con Unravel conoceremos a Yarny, un simpático y adorable personaje nuevo hecho de una única hebra de lana que se va desenrollando progresivamente. Inspirado en los impresionantes e irrepetibles paisajes nórdicos, Unravel es un juego de plataformas basado en la física con un imponente aspecto visual. Yarny podrá usar su lana para afrontar cualquier desafío, desde saltar de rama en rama hasta dar un paseo en cometa. Al cobrar vida, nuestro protagonista representa los lazos que unen a los seres queridos. Acompaña a Yarny en una aventura que desborda la realidad y vuelve a conectar los recuerdos perdidos de una familia. Disfruta de un relato sin palabras, de una historia sincera y emocionante sobre el amor, la esperanza y el viaje de la vida.',
    };
    let ZELDA: Juego = {
      titulo: 'Zelda breath of the wild',
      rating: 85,
      isTopJuego: false,
      compañia: 'EA',
      plataforma: 'Switch',
      genero: 'Aventura',
      imagen: '../../assets/zelda.jpg',
      video: '../../assets/zelda.mp4',
      descripcion:
        'The Legend of Zelda: Breath of the Wild para Nintendo Switch es un juego de acción y aventuras de Nintendo, la última entrega de la larga serie de The Legend of Zelda. El juego ofrece un formato de mundo abierto, con amplia libertad y pocas instrucciones para los jugadores. La jugabilidad consiste en recolectar utensilios y materiales, completar misiones secundarias y resolver ingeniosos puzles y mazmorras.',
    };
    let GTAV: Juego = {
      titulo: 'Grand theft auto 5',
      rating: 98,
      isTopJuego: true,
      compañia: 'Rockstar Games',
      plataforma: 'PC',
      genero: 'Aventura',
      imagen: '../../assets/GTA5.jpg',
      video: '../../assets/gta5_trailer.mp4',
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
      video: '../../assets/microsoft_trailer.mp4',
      descripcion:
        'Microsoft Flight Simulator constituye la próxima generación de una de las series de simulación más queridas. Desde aviones ligeros hasta aviones a reacción de fuselaje ancho, podrás pilotar impresionantes aeronaves muy detalladas en un mundo increíblemente realista. Crea tu propio plan de vuelo y visita cualquier rincón del planeta. Disfruta volando de día o de noche y supera condiciones meteorológicas realistas y desafiantes.',
    };
    let TLASTOFUS2: Juego = {
      titulo: 'The last of us II',
      rating: 73,
      isTopJuego: false,
      compañia: 'Sony',
      plataforma: 'PS5',
      genero: 'Aventura',
      imagen: '../../assets/TLASTOFUS2.jpg',
      video: '../../assets/tlastofus2.mp4',
      descripcion:
        'The Last of Us Part II es un videojuego de acción-aventura y survival horror desarrollado por Naughty Dog y distribuido por Sony Interactive Entertainment',
    };
    let GHOSTOFT: Juego = {
      titulo: 'Ghost of tsushima',
      rating: 88,
      isTopJuego: false,
      compañia: 'Sony',
      plataforma: 'PS5',
      genero: 'Aventura',
      imagen: '../../assets/GHOSTOFT.jpg',
      video: '../../assets/gosth_trailer.mp4',
      descripcion:
        'A finales del siglo XIII, el Imperio mongol asola naciones enteras en su conquista del Este. La isla de Tsushima es todo lo que se interpone entre las islas principales de Japón y una invasión mongola masiva.',
    };
    let FORZAHORIZON5: Juego = {
      titulo: 'Forza horizon 5',
      rating: 90,
      isTopJuego: false,
      compañia: 'Microsoft',
      plataforma: 'PC, Xbox-One',
      genero: 'Aventura',
      imagen: '../../assets/FORZAHORIZON5.jpg',
      video: '../../assets/forzaHorizon5.mp4',
      descripcion:
        'Forza Horizon 5 para PC es un juego de simulación de carreras ambientado en varios lugares de México. Es el quinto juego de la serie Forza Horizon y el duodécimo juego principal de la franquicia general de Forza.',
    };
    let REVILLAGE: Juego = {
      titulo: 'Resident evil: Village',
      rating: 82,
      isTopJuego: false,
      compañia: 'SONY',
      plataforma: 'PC, Xbox-One, PS5',
      genero: 'Terror',
      imagen: '../../assets/REVILLAGE.jpg',
      video: '../../assets/revillage.mp4',
      descripcion:
        'Resident Evil Village para PC es un juego de terror de supervivencia. Esta encarnación es el décimo lanzamiento principal de la franquicia y, sorprendentemente, el 26 , si se incluye todos los spin-offs y remakes, lo que convierte a Resident Evil en una de las franquicias más prolíficas que existen. Resident Evil Village a veces se llama Resident Evil 8: Village y los desarrolladores han descubierto que pueden crear un rompecabezas oculto dentro del título, que se representa con números romanos para ocho VIII en lugar de Vill en Village. ¡Interesante!',
    };
    let ALIENISOLATION: Juego = {
      titulo: 'Alien Isolation',
      rating: 79,
      isTopJuego: false,
      compañia: 'Microsoft',
      plataforma: 'PC, Xbox-One',
      genero: 'Terror',
      imagen: '../../assets/ALIENISOLATION.jpg',
      video: '../../assets/alien.mp4',
      descripcion:
        'Descubre el verdadero significado del terror en Alien: Isolation, un juego de horror y supervivencia que transcurre en un ambiente de constante tensión y peligro. Han pasado quince años desde los sucesos de Alien™. La hija de Ellen Ripley, Amanda, se ve involucrada en una desesperada batalla por sobrevivir cuando se embarca en una misión que le permitirá averiguar qué sucedió realmente a su madre.',
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

  ngOnInit() {
    this.arrayOnSave = JSON.parse(localStorage.getItem('juegos') || '[]');
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
