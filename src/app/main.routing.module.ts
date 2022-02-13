import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { mainComponent } from './Main/main.component';

import { juegoComponent } from './zJuego/juego.component';

const routing: Routes = [
  { path: '', component: mainComponent },
  { path: 'juego', component: juegoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routing)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
