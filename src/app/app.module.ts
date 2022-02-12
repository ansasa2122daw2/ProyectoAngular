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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, HeaderComponent, mainComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    NgbModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
