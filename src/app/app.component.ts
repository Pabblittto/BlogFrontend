import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MessagesService } from './services/Messages/messages.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './services/Auth/auth.service';
import { Component } from '@angular/core';
import { types } from './services/Messages/Message';
import {Message} from './services/Messages/Message'
import Urls from './urls.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Forum';

  Login: string="";
  Password:string="";
  showLogin:boolean=false;
  
  LoginStatus:Message= new Message();


  SendLogin(){
    if(this.Login=="" || this.Password==""){
      this.LoginStatus=new Message("Pools cant be empty",types.danger);
    }
    else{
      this.LoginStatus= new Message();
      this.auth.Login(this.Login,this.Password).subscribe(
        res=>{
          this.messageprovider.AddMessage("Successful Login",types.success);
          this.HideLogin();
          this.auth.SuccesfullLogin(res["jwt"]);
        },
        (err:HttpErrorResponse)=>{
          setTimeout(()=>{
            this.LoginStatus= new Message();
          },4000);
          if(err.status!=404)
            this.LoginStatus= new Message("Invalid login!",types.danger)
          else
            this.messageprovider.AddCriticalError();
        })
    }
  }

  LogOut():void{
    this.router.navigateByUrl(this.router.url);
    this.auth.Logout();
  }

  ShowLogin(){
    this.showLogin=true;
    this.Login="";
    this.Password="";
    document.getElementById('LoginDiv').style.visibility="visible";
    document.getElementById('LoginInput').focus();
    this.LoginStatus= new Message();
  }

  HideLogin(){
    this.showLogin=false;
    setTimeout(()=>{
      document.getElementById('LoginDiv').style.visibility="hidden";
    },500);
  }


  constructor(public auth:AuthService, private messageprovider: MessagesService,private router:Router){

      auth.TryGetToken();// trigger propper signal
    }


}
