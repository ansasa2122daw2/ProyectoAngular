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

//Indexed //npm install ngx-indexed-db
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';

const dbConfig: DBConfig = {
  name: 'Contacto',
  version: 1,
  objectStoresMeta: [
    {
      store: 'Contacto',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        {
          name: 'nombre',
          keypath: 'nombre',
          options: { unique: false },
        },
        { name: 'apellido', keypath: 'apellido', options: { unique: false } },
        {
          name: 'telefono',
          keypath: 'telefono',
          options: { unique: false },
        },
        { name: 'email', keypath: 'email', options: { unique: true } },
        {
          name: 'comentario',
          keypath: 'comentario',
          options: { unique: true },
        },
      ],
    },
  ],
};

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { mainComponent } from './Main/main.component';
import { juegoComponent } from './zJuego/juego.component';
import { favComponent } from './zzFav/fav.component';
import { ContactoComponent } from './Contacto/contacto.component';

import { ChekiadoPipe } from './Pipes/chekiado';
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
    ChekiadoPipe,
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
    NgxIndexedDBModule.forRoot(dbConfig),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
