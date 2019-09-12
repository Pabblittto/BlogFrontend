import { MessagesService } from './../../services/Messages/messages.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import urls from '../../urls.json';
import { types } from 'src/app/services/Messages/Message';


@Component({
  selector: 'app-profile-tags',
  templateUrl: './profile-tags.component.html',
  styleUrls: ['./profile-tags.component.css']
})
export class ProfileTagsComponent implements OnInit {

  constructor(private http:HttpClient,private messageProvider:MessagesService) { }

  MyTags: string[]= [];

  private UserTagsUrl=urls.GetUserTags;

  ngOnInit() {
    this.getUserTags();
this.MyTags.length

  }

  private getUserTags(){
    this.http.post<string[]>(this.UserTagsUrl,{}).subscribe(
      res=>{
        this.MyTags=res;
      },
      (err:HttpErrorResponse)=>{
        if(err.status!=404)//if error is not conneted with server activity
          this.messageProvider.AddMessage("Something goes wrong, can't get your tags :/",types.danger);
        else
          this.messageProvider.AddCriticalError();
      }
    )
  }

}
