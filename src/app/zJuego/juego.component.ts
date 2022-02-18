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
import { ActivatedRoute } from '@angular/router';
import { mainComponent } from '../Main/main.component';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css'],
  animations: [],
})
export class juegoComponent {
  rebut: string;
  img: string;
  compania: string;
  plataforma: string;
  genero: string;
  descripcion: string;

  constructor() {
    this.rebut = history.state.data.juegos.titulo;
    this.img = history.state.data.juegos.imagen;
    this.compania = history.state.data.juegos.compañia;
    this.plataforma = history.state.data.juegos.plataforma;
    this.genero = history.state.data.juegos.genero;
    this.descripcion = history.state.data.juegos.descripcion;
  }
  ngOnInit(): void {}
}
