import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        let token:string =localStorage.getItem('jwt');
        let tokenReq= req.clone({
            setHeaders:{
                Authorization: `Bearer ${token}`
            }

        });

        console.log("interceptorrr");
        
        return next.handle(tokenReq);
    }


}