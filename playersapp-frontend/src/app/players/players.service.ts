import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})


export class PlayersService {

  constructor(private httpClient: HttpClient) { }
  // private API_URL = 'http://localhost:3000/players'; 
  private API_URL = 'http://192.168.1.178:3000/players';
  // configUrl = './assets/config.json';

    getPlayers() {
      return this.httpClient.get<Response>(this.API_URL);
    }

    createData(data: any){
      return this.httpClient.post(this.API_URL, data);
    }

    updateData(data: any){
      // return this.httpClient.put("http://localhost:3000/players/${data.name}`", data);
      return this.httpClient.put(`${this.API_URL}/${data.id}`, data);
    }

    deleteData(id: number){
      return this.httpClient.delete(`${this.API_URL}/${id}`);
    }
}
  