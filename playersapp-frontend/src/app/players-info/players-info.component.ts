import { Component } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { PlayersService } from 'src/app/players/players.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-players-info',
  templateUrl: './players-info.component.html',
  styleUrls: ['./players-info.component.scss']
})
export class PlayersInfoComponent {

  players$: Observable<any> | undefined;
  refreshPlayers$: any;
  player: any;
  constructor(
    private playersService: PlayersService,
    private route: ActivatedRoute,
    )
    {
      

    }
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.players$ = this.playersService.getPlayersById(id);

      this.playersService.getPlayersById(id).subscribe(
        player => {
          this.player = player; // Assign the response data to the property
        },
        error => {
          console.error('error:', error); // Handle the error
        }
      );
      
    });
  }
}
