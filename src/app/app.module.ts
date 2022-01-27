import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//importar SidenavModule
import { MatSidenavModule } from '@angular/material/sidenav';

//Boostrap SideBar acordeón
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { sidebarComponent } from './SideBar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, HeaderComponent, sidebarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
