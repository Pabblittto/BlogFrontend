import { MessagesService } from './../../services/Messages/messages.service';
import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { types } from 'src/app/services/Messages/Message';


@Component({
  selector: 'app-confirm-identity',
  templateUrl: './confirm-identity.component.html',
  styleUrls: ['./confirm-identity.component.css']
})
export class ConfirmIdentityComponent implements OnInit {

  constructor(private messageProvider:MessagesService) { }

  @Output() Password = new EventEmitter<string>();
  @ViewChild("Background",{static:true}) Background: ElementRef<HTMLElement>;

  Show(){
    this.Background.nativeElement.style.display="block";
  }

  Hide(){
    this.Background.nativeElement.style.display="none";
  }


  TypedPassword:string="";


  ConfirmButton(){
    if(this.TypedPassword==""){
      this.messageProvider.AddMessage("Password can't be empty!",types.danger);
    }
    else{
      this.Password.emit(this.TypedPassword);      
      this.TypedPassword="";
      this.Hide();
    }
  }

  BackButton(){
    this.TypedPassword="";// reset password
    this.Hide();
  }

  ngOnInit() {
  }

}
