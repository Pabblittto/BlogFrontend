import { ChangePasswordModel } from './../../objects/Models/ChangePasswordModel';
import { MessagesService } from './../../services/Messages/messages.service';
import { types } from 'src/app/services/Messages/Message';
import { Message } from './../../services/Messages/Message';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import urls from '../../urls.json';
import { Logs } from 'selenium-webdriver';

@Component({
  selector: 'app-profile-password',
  templateUrl: './profile-password.component.html',
  styleUrls: ['./profile-password.component.css']
})
export class ProfilePasswordComponent implements OnInit {

  ChangePasswordUrl: string= urls.ChangePassword;

  NewPassword:string="";
  ConfirmNewPassword:string="";

  PasswordFromConfirm:string;

  PropperPasswordExp=/(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d$@$!%*?&].{5,}/;

  NewPasswordMessage:Message = new Message();

  GetTypedPassword(event){
    
    this.PasswordFromConfirm=event;    
    var model= new ChangePasswordModel({
      NewPassword:this.NewPassword,
      ConfirmNewPassword: this.ConfirmNewPassword,
      OldPassword: this.PasswordFromConfirm
    });
    this.http.post(this.ChangePasswordUrl,model).subscribe(
      res=>{
        this.messagesprovider.AddMessage("Password Changed Succesfully",types.success);
      },
      (err:HttpErrorResponse)=>{
        if(err.status==401){// if error was unauthorized- bad password or 
          this.messagesprovider.AddMessage("Invalid Password or token time expires!",types.danger);
        }
        else if(err.status==404){
          this.messagesprovider.AddCriticalError();
        } 
        else{
          this.messagesprovider.AddMessage("Unexpected error - invalid new password",types.danger);
        }
      })
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
