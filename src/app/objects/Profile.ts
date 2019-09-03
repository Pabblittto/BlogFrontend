
export class Profile{
    Email:string;
    Username:string;
    Tags:string[];

    constructor(_profile?:any){
        _profile && _profile.Email? this.Email=_profile.Email : this.Email="";
        _profile && _profile.Username? this.Username=_profile.Username : this.Username="";
        _profile && _profile.Tags? this.Tags=[..._profile.Tags] : this.Tags=[];
    }
}