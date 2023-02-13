import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudPlayersComponent } from './crud-players/crud-players.component';
import { PlayersComponent } from './players/players.component';

const routes: Routes = [
  // { path:  '', redirectTo: '/players', pathMatch: 'full' },
  // { path:  'players', component: PlayersComponent },
  // { path:  'crud-players', component: CrudPlayersComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
