import { Subject } from 'rxjs';
import { MessagesService } from './../../services/Messages/messages.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import Urls from '../../urls.json';
import { types } from 'src/app/services/Messages/Message';

@Component({
  selector: 'app-edit-description',
  templateUrl: './edit-description.component.html',
  styleUrls: ['./edit-description.component.css']
})
export class EditDescriptionComponent implements OnInit {

  constructor(private http:HttpClient,private messageProvider:MessagesService) { }
  @Input() Description:string;

  ChangeDescriptionUrl=Urls.ChangeDescription;

  NewDescription:string;

  ConfirmButton(){
    if(this.NewDescription!=this.Description){
      this.http.post(this.ChangeDescriptionUrl,{Value:this.NewDescription}).subscribe(
        res=>{
          this.messageProvider.AddMessage("Description changed succesfully",types.success);
        },
        (err:HttpErrorResponse)=>{
          if(err.status!=404){
            this.messageProvider.AddMessage("Something went wrong",types.danger);
          }
          else
            this.messageProvider.AddCriticalError();
        }
      )

    }
    document.getElementById("DescriptionEdit").style.display="none";
  }

  SetDescription(desc:string){
    this.NewDescription=desc;
  }

  BackButton(){
    document.getElementById("DescriptionEdit").style.display="none";
    this.NewDescription=this.Description;
  }

  ngOnInit() {
    this.NewDescription=this.Description;
  }

}
