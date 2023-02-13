import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersModule } from './players/players.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalModule } from 'ngx-bootstrap/modal';

import { CrudPlayersModule } from './crud-players/crud-players.module';
import { CrudPlayersComponent } from './crud-players/crud-players.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudPlayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlayersModule,
    FontAwesomeModule,
    CrudPlayersModule,
    ModalModule.forRoot(),
    
  ],
  providers: [
    CrudPlayersComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
