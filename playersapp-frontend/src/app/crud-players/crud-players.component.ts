import { Component,OnInit} from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { PlayersService } from '../players/players.service';

declare var $:any;
declare var formData: any;
@Component({
  selector: 'app-crud-players',
  templateUrl: './crud-players.component.html',
  styleUrls: ['./crud-players.component.scss']
})



export class CrudPlayersComponent implements OnInit{
  

  public openModal(){
    $('#exampleModal').modal('show');
  }
  public closeModal(){
    $('#exampleModal').modal('hide');
  }
  
  

  /* Define Form Here */
  data:any[] = [];
  myForm: FormGroup;
  constructor(
    public playersService:PlayersService,
    ){
      this.myForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        imgUrl: new FormControl('', [Validators.required]),
        info: new FormControl('', [Validators.required]),
        jerseyColor: new FormControl('', [Validators.required]),
      });
  }

  
  submitForm(){
    if (this.myForm.valid) {
          this.playersService.createData(this.myForm.value).subscribe(data => {
          this.data.push(data);
          this.myForm.reset();
          this.closeModal();
        });
    }
  }


  ngOnInit():void {
    
  }
  
}
