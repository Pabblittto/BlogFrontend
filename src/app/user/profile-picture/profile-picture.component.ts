import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MessagesService } from './../../services/Messages/messages.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { types } from 'src/app/services/Messages/Message';
import urls from '../../urls.json';


@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.css']
})
export class ProfilePictureComponent implements OnInit {

  Myform= new FormGroup({
    ProfileImg: new FormControl('',Validators.required)
  });

  private ChangePicUrl= urls.ChangeProfilePic;

  ImgName:string="";
  ImgValue:string="";

  submit(){
    this.http.post(this.ChangePicUrl,{"Name":this.ImgName,"Picture":this.ImgValue}).subscribe(
      res=>{
        this.messageProvider.AddMessage("Picture changed successfully",types.success);
      },
      (err:HttpErrorResponse)=>{
        if(err.status!=404)//if error is not conneted with server activity
        this.messageProvider.AddMessage("Something goes wrong, avater dont updated",types.danger)
        else
        this.messageProvider.AddCriticalError();
      }
    )


  }

  ChangingImage(event){
    console.log(event);

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onloadend=()=>{
      console.log(reader.result);
      
      this.ImgValue=reader.result.toString().split(',')[1];
      this.ImgName=event.target.files[0].name;
    }

    reader.onerror=()=>{
      this.messageProvider.AddMessage("There was a problem with avatar image",types.danger)
    }


  }

  constructor(private messageProvider:MessagesService, private http:HttpClient) { }

  ngOnInit() {
  }

}
