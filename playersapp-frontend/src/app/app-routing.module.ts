import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersInfoComponent } from './players-info/players-info.component';
import { PlayersComponent } from './players/players.component';

const routes: Routes = [
  { path:  '', redirectTo: '/players', pathMatch: 'full' },
  { path:  'players', component: PlayersComponent },
  { path:  'players-info/:id', component: PlayersInfoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
