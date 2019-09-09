import { MessagesService } from './../Messages/messages.service';
import { JWTpayload } from './../../objects/JWTpayload';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import Urls from '../../urls.json';
import { types } from '../Messages/Message';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  SimpleUserData: JWTpayload;
  private token:string="";//Authorization token 
  private LoginUrl=Urls.LoginUrl;
  

  LoginEvents = new  Subject<boolean>();// subscribes get changing value if sb get logged in or logged out

  LoggedIn:boolean;

  constructor(private http :HttpClient,private messageprovider:MessagesService) {
    this.IsLoggedIn().subscribe(res=>{
      this.LoggedIn=res;
    });
  this.TryGetToken();
  this.DecodeJWT();
  //this.CheckExpTime(); to musze włączyć!!


  }
  
  private CheckExpTime():void{// checks expiration time and log out if token expired
    let nowTime=Date.now()/1000;
    if(nowTime>this.SimpleUserData.exp)//token expired- log out
    {
      this.Logout();
      this.messageprovider.AddMessage("Your session expired",types.danger);
    }

  }

  Logout(){
    this.LoginEvents.next(false);
    localStorage.removeItem("jwt");
    this.SimpleUserData=null;
    this.token="";
  }

  SuccesfullLogin(jwt:string){// send info tht sb is logged in and decode jwt
    localStorage.setItem("jwt",jwt);// save jwt
    this.DecodeJWT();// decode jwt
    this.LoginEvents.next(true);
  }

  Login(login:string,pasword:string ): Observable<Object>{
    return this.http.post(this.LoginUrl,{"Login": login,"Password":pasword});
  }

  IsLoggedIn():Observable<boolean>{
    return this.LoginEvents;
  }

  TryGetToken(){// try to get token from localstorage- it sends info with LoginEvents
    this.token=localStorage.getItem("jwt");
    if(this.token==null)// jwt not found
      this.LoginEvents.next(false);
    else
      this.LoginEvents.next(true);
  }

   private DecodeJWT(){
    this.TryGetToken();
    if(this.token!=null){
    this.SimpleUserData = JSON.parse(window.atob(this.token.split('.')[1]));
    this.SimpleUserData.ProfilePic= Urls.MyServerPath + this.SimpleUserData.ProfilePic;      
    }

  }


}