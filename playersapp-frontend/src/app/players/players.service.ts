import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private httpClient: HttpClient) { }

  // configUrl = './assets/config.json';

    getPlayers() {
      return this.httpClient.get<Response>("http://localhost:3000/players");
    }
}
  