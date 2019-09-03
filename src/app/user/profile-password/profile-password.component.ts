import { MessagesService } from './../../services/Messages/messages.service';
import { types } from 'src/app/services/Messages/Message';
import { Message } from './../../services/Messages/Message';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-password',
  templateUrl: './profile-password.component.html',
  styleUrls: ['./profile-password.component.css']
})
export class ProfilePasswordComponent implements OnInit {

  NewPassword:string="";
  ConfirmNewPassword:string="";

  PasswordFromConfirm:string;

  PropperPasswordExp=/(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d$@$!%*?&].{5,}/;

  NewPasswordMessage:Message = new Message();

  GetTypedPassword(password:string){
    this.PasswordFromConfirm=password;
    this.messagesprovider.AddMessage("Trzebaaaaaaaaaaa wysłać info do servera",types.danger);
    // tu trzeba wysłać http do servera
  }

  ChangePasswordButton(){
    if(this.CheckNewPassword()==true){
      document.getElementById('ConfirmPassword').style.display='block';
    }
    else
    this.messagesprovider.AddMessage("Password don't fulfill requirements",types.danger);
  }
  

  CheckNewPassword():boolean{
    if(this.NewPassword==""){
      this.NewPasswordMessage = new Message("Password can't be empty!",types.danger);
      return false;
    }
    else
    if(!this.PropperPasswordExp.test(this.NewPassword))// if new passwords dont have propper shape
    {
      this.NewPasswordMessage = new Message("Password don't fulfill requirements!",types.danger);
      return false;
    }
    else// password have proper structure
    if(this.NewPassword!=this.ConfirmNewPassword){
      this.NewPasswordMessage = new Message("Passwords do not match!",types.danger);
      return false;
    }
    else{
      this.NewPasswordMessage = new Message("Ok",types.success);
      return true;
    }
      
  }

  constructor(private http:HttpClient,private messagesprovider: MessagesService) { }

  ngOnInit() {
  }

}
