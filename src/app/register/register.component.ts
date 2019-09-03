import { Message } from './../services/Messages/Message';
import { MessagesService } from './../services/Messages/messages.service';
import { CheckPoolsService } from './../services/Registration/check-pools.service';
import { Registermodel } from './Registermodel';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {types} from './../services/Messages/Message';
import { Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model:Registermodel = new Registermodel();

  //messages for form inputs to display errors
  LoginMessage:Message = new Message();
  PasswordMessage:Message = new Message();
  BlognameMessage: Message = new Message();
  DescriptionMessage: Message = new Message();
  EmailMessage:Message= new Message();

  emailRegularExp=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  passwordRegulerExp=/(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d$@$!%*?&].{5,}/;

  RegisterLoginCheck(){
    if(this.model.Login!=''){
      // this.LoginMessage = new Message();
      this.checkservice.LoginCheck(this.model.Login).subscribe(
        res=>{// when server returned OK response
          this.LoginMessage= new Message("OK",types.success)
        },
        (err:HttpErrorResponse)=>{// when server returned error response
          if(err.status!=404)//if error is not conneted with server activity
          this.LoginMessage= new Message("This Login is used by another user:/",types.danger);
          else
          this.messService.AddCriticalError();
        }
      )
    }
    else
    this.LoginMessage= new Message("Login can't be empty!",types.danger);
  }

  RegisterPasswordCheck(){
    if(this.model.checkPasswords()==false){
      this.PasswordMessage= new Message("Passwords not match",types.danger);
    }
    else{
      if(this.model.Password=="")
        this.PasswordMessage= new Message("Password cant be empty!",types.danger);
      else
      if(this.passwordRegulerExp.test(this.model.Password))
        this.PasswordMessage= new Message("OK",types.success);
      else
        this.PasswordMessage= new Message("Password don't fulfill requirements",types.danger);
    }
  }


  RegisterBlognameCheck(){
    if(this.model.Blogname=="" && this.model.CreateBlog==true){
      this.BlognameMessage= new Message("Blog name cant be empty!",types.danger);
    }
    else if(this.model.Blogname.length>200){
      this.BlognameMessage= new Message("Blog name is too long!",types.danger);
    }
    else{
      this.checkservice.BlogNameCheck(this.model.Blogname).subscribe(
        res=>{
          this.BlognameMessage = new Message("OK",types.success);
        },
        (err:HttpErrorResponse)=>{
          if(err.status!=404)//if error is not conneted with server activity
          this.BlognameMessage = new Message("This Blog name is used by another user:/",types.danger);
          else
          this.messService.AddCriticalError();
        }
      )
    }
  }

  RegisterDescriptionCheck(){
    if(this.model.Description.length>1000)
      this.DescriptionMessage = new Message("Description is too long!",types.danger)
    else
      this.DescriptionMessage.message="";
  }


  Registerbutton(){

    this.EmailShapeCheck()
    this.RegisterLoginCheck();
    this.RegisterPasswordCheck();
    this.RegisterBlognameCheck();
    this.RegisterDescriptionCheck();
    if(this.LoginMessage.message=="OK" && (this.BlognameMessage.message=="OK" || this.BlognameMessage.message=="") && this.PasswordMessage.message=="OK" && this.DescriptionMessage.message=="" && this.EmailMessage.message=="OK")
    {
      this.checkservice.Register(this.model).subscribe(
        res=>{
          this.messService.AddMessage("Account successfull created. Now you can login",types.success);
          this.router.navigate(["/"]);
        },
        (err:HttpErrorResponse)=>{
          if(err.status!=404)//if error is not conneted with server activity
          this.messService.AddMessage("Data was rejected by server :c",types.danger);
          else
          this.messService.AddCriticalError();
        }
        )
    }
    else
    this.messService.AddMessage("Correct red pools!",types.danger);
  }



  EmailShapeCheck(){
    if(this.emailRegularExp.test(this.model.Email))
    this.EmailMessage= new Message("OK",types.success);
    else
    this.EmailMessage= new Message("Wrong Email",types.danger);
  }


  constructor(private checkservice :CheckPoolsService,private messService: MessagesService, private router: Router) { }


  ngOnInit() {
  }

}
