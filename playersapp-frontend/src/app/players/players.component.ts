import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable,BehaviorSubject, switchMap, identity } from 'rxjs';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { PlayersService } from './players.service';

import { Router,RouterModule } from '@angular/router';


declare var formData: any;
declare var $:any;
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})



export class PlayersComponent implements OnInit {
  

  data:any[] = [];
  players$: Observable<any> | undefined;
  myForm: FormGroup;

  refreshPlayers$ = new BehaviorSubject<boolean>(true);
  formBuilder: any;




  constructor (
    private playersService: PlayersService, private router: Router) {
      this.myForm = new FormGroup({
        id: new FormControl(''),
        name: new FormControl('', [Validators.required]),
        imgUrl: new FormControl('', [Validators.required]),
        info: new FormControl('', [Validators.required]),
        jerseyColor: new FormControl('', [Validators.required]),
      });
      
  }

  
  onPlayerClick(id: string) {
    this.router.navigate(['players-info', id]);
  }

  AddorEdit:any;
  public openModal(){
    this.selectedPlayer = null;
    this.myForm.reset({
      name: '',
      imgUrl: '',
      info: '',
      jerseyColor: ''
    });
    $('#submitButton').text('Save Player');
    $('#actionTitle').text('Add Player');
    $('#exampleModal').modal('show');
    this.AddorEdit = true;
  }
  public closeModal(){
    $('#exampleModal').modal('hide');
  }
  ngOnInit(): void {
    // this.playerss = this.playersService.getPlayers();
    // $('.toast').toast('show');
    // this.isInputDisabled = true;
    this.players$ = this.refreshPlayers$.pipe(switchMap(_ => this.playersService.getPlayers()));
  }


  selectedPlayer: any;
  selectPlayer(player: any) {
    this.selectedPlayer = player;
    // this.selectedPlayer = player;
    // console.log(this.selectedPlayer);
    this.myForm.controls['id'].setValue(player.id);
    this.myForm.controls['name'].setValue(player.name);
    this.myForm.controls['imgUrl'].setValue(player.imgUrl);
    this.myForm.controls['info'].setValue(player.info);
    this.myForm.controls['jerseyColor'].setValue(player.jerseyColor);
    $('#actionTitle').text('Edit Player');
    $('#submitButton').text('Update Player');
    $('#exampleModal').modal('show');
    this.AddorEdit = true;
  }

  public deletePlayer(player:any){
    this.AddorEdit = false;
    this.selectedPlayer = player;
    $('#actionTitle').text('Delete Player');
    $('#submitButton').text('Yes');
    $('#selectedPlayerDel').text(player.name);
    $('#exampleModal').modal('show');
  }

  submitForm(){
    if (!this.selectedPlayer){
      // console.log('Add Action');
      if (this.myForm.valid) {
          this.playersService.createData(this.myForm.value).subscribe(data => {
          this.refreshPlayers$.next(false);
          this.myForm.reset();
          this.closeModal();
          this.showMessage('add');
        });
      }
    }else{
      if ($('#actionTitle').text() === 'Edit Player'){
        if (this.myForm.valid) {
          this.playersService.updateData(this.myForm.value).subscribe(data => {
            const index = this.data.findIndex(player => player.id == this.selectedPlayer.id);
            this.data[index] = data;
            this.refreshPlayers$.next(false);
            this.myForm.reset();
          });
          this.showMessage('edit');
          this.closeModal();
        }
      }else{
        console.log(this.playersService.deleteData(this.selectedPlayer.id).subscribe(() => {
          this.data = this.data.filter(data => data.id !== this.selectedPlayer.id)
          this.refreshPlayers$.next(false);
        })) ;
        this.closeModal();
        this.showMessage('delete');
      }
    }
  }

  showMessage(action:string){
    if (action === 'add'){
      $("#notifMsg").text('New Player added!');
    }else if(action ==='edit'){
      $("#notifMsg").text(this.selectedPlayer.name + ' updated successfully!');
    }else{
      $("#notifMsg").text(this.selectedPlayer.name + ' deleted successfully!');
    }
    $('.toast').toast('show');
  }
  
}
