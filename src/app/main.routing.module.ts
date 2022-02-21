import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { mainComponent } from './Main/main.component';
import { PageNotFound } from './zzPagenotFound/error.component';

import { juegoComponent } from './zJuego/juego.component';
import { favComponent } from './zzFav/fav.component';
import { ContactoComponent } from './Contacto/contacto.component';

const routing: Routes = [
  { path: '', component: mainComponent },
  { path: 'juego', component: juegoComponent },
  { path: 'favoritos', component: favComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', component: PageNotFound },
];

@NgModule({
  imports: [RouterModule.forRoot(routing)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
