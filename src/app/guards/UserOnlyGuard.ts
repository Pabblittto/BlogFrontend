import { AuthService } from './../services/Auth/auth.service';
import { CanActivate } from '@angular/router';


export class UserOnlyGuard implements CanActivate{

    constructor(private auth:AuthService){ }

    canActivate():boolean{
        return this.auth.LoggedIn;
    }
}