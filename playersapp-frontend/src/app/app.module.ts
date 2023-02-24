import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersModule } from './players/players.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalModule } from 'ngx-bootstrap/modal';


import { ReactiveFormsModule } from '@angular/forms';
import { PlayersInfoModule } from './players-info/players-info.module';
import { RouterModule, Routes  } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlayersModule,
    FontAwesomeModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    PlayersInfoModule,
    
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
