import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//importar SidenavModule
import { MatSidenavModule } from '@angular/material/sidenav';

//Boostrap SideBar
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Checkbox
import { MatCheckboxModule } from '@angular/material/checkbox';

//icon
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

//valoracion
import { MatProgressBarModule } from '@angular/material/progress-bar';

//pipe
import { Pipe, PipeTransform } from '@angular/core';

//Badge
import { MatBadgeModule } from '@angular/material/badge';

import { FormsModule } from '@angular/forms';

//Menu expansion
import { MatExpansionModule } from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { mainComponent } from './Main/main.component';
import { juegoComponent } from './zJuego/juego.component';
import { favComponent } from './zzFav/fav.component';
import { ContactoComponent } from './Contacto/contacto.component';

import { BusquedaPipe } from './Pipes/busqueda';
import { UpperCapitalPipe } from './Pipes/pipe.personalizada';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MainRoutingModule } from './main.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    mainComponent,
    juegoComponent,
    UpperCapitalPipe,
    favComponent,
    BusquedaPipe,
    ContactoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    NgbModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MainRoutingModule,
    MatBadgeModule,
    MatExpansionModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
