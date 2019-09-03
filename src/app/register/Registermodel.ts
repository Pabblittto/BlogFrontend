

export class Registermodel{
    Login:string;
    Password:string;
    ConfirmPassword:string;
    CreateBlog:boolean=false;
    Blogname:string;
    Description:string;
    Email:string;
    

    checkPasswords():boolean{
        if(this.Password==this.ConfirmPassword)
            return true;
        else
            return false;
    }


    constructor(_model?:Registermodel){//_model is not neccessary
        if(_model && _model.Login) 
        {this.Login=_model.Login }
        else 
        {this.Login="";}

        if(_model && _model.Password) 
        {this.Password=_model.Password}
        else
        {this.Password="";}

        if(_model && _model.ConfirmPassword) 
        this.ConfirmPassword=_model.ConfirmPassword
        else
        this.ConfirmPassword="";

        if(_model && _model.CreateBlog)
        this.CreateBlog=_model.CreateBlog;
        else
        this.CreateBlog=false;

        if(_model && _model.Blogname)
        this.Blogname=_model.Blogname;
        else
        this.Blogname="";

        if(_model && _model.Description)
        this.Description=_model.Description
        else
        this.Description="";

        if(_model && _model.Email)
        this.Email=_model.Email;
        else
        this.Email="";
    }

}