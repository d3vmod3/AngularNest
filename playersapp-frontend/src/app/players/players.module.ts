import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PlayersComponent } from './players.component';



@NgModule({
  declarations: [
    PlayersComponent
  ],
  exports:[
    PlayersComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class PlayersModule { }
