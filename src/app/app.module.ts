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

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { mainComponent } from './Main/main.component';
import { juegoComponent } from './zJuego/juego.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MainRoutingModule } from './main.routing.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, mainComponent, juegoComponent],
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
