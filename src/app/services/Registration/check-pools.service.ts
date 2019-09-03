import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { Registermodel } from 'src/app/register/Registermodel';
import Urls from '../../urls.json';


 
@Injectable({
  providedIn: 'root'
})
export class CheckPoolsService{// service for checking pools and for register new user
  constructor(private http: HttpClient) {   }

  private logincheckUrl=Urls.LoginCheckAvailable;// server page which checks login availibility 
  private blogNameUrl=Urls.BlogNameCheckAvailibility;// server page which chesks if this blog name is available
  private Registerurl=Urls.RegisterUrl;

  


  LoginCheck(login: string): Observable<Object>{// checks if login is not used by anybody
     return this.http.post(this.logincheckUrl,{"Value":login});
  }

  BlogNameCheck(name:string):Observable<Object>{
     return this.http.post(this.blogNameUrl,{"Value":name});
  }

  Register(model:Registermodel){
    return this.http.post(this.Registerurl,model);
  }






}
