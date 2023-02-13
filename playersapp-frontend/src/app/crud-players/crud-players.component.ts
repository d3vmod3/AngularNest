import { Component } from '@angular/core';

declare var $:any;


@Component({
  selector: 'app-crud-players',
  templateUrl: './crud-players.component.html',
  styleUrls: ['./crud-players.component.scss']
})
export class CrudPlayersComponent {
  public openModal(){
    $('#exampleModal').modal('show');
  }
  public closeModal(){
    $('#exampleModal').modal('show');
  }
}
