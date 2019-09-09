import { MessagesService } from './../../services/Messages/messages.service';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { types } from 'src/app/services/Messages/Message';


@Component({
  selector: 'app-confirm-identity',
  templateUrl: './confirm-identity.component.html',
  styleUrls: ['./confirm-identity.component.css']
})
export class ConfirmIdentityComponent implements OnInit {

  constructor(private messageProvider:MessagesService) { }

  @Output() Password= new EventEmitter<string>();


  TypedPassword:string="";


  ConfirmButton(){
    if(this.TypedPassword==""){
      this.messageProvider.AddMessage("Password can't be empty!",types.danger);
    }
    else{
      this.TypedPassword="";
      this.Password.emit(this.TypedPassword);
      document.getElementById('ConfirmPassword').style.display='none';
    }
  }

  BackButton(){
    this.TypedPassword="";// reset password
    document.getElementById('ConfirmPassword').style.display='none';
  }

  ngOnInit() {
  }

}
