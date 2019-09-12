import { Post } from './../../objects/Post';
import { MessagesService } from './../../services/Messages/messages.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import urls from '../../urls.json';
import { types } from 'src/app/services/Messages/Message';

@Component({
  selector: 'app-post-modyfication-panel',
  templateUrl: './post-modyfication-panel.component.html',
  styleUrls: ['./post-modyfication-panel.component.css']
})
export class PostModyficationPanelComponent implements OnInit {

  constructor(private http : HttpClient,private messageProvider:MessagesService) { }

  private DetetePostUrl=urls.DeletePost;

  @Input() SpecyficPost:Post;

  Information:string;
  result:boolean;

  DeleteButton(){// Delete button sends request to server, edit button redirect to another site
    this.Information="Delete post "+"''"+ this.SpecyficPost.Title+"'";

    document.getElementById(`Confirm${this.SpecyficPost.PostId}`).style.display="block";
  }

  GetResult(event):void{
    this.result=event;
    document.getElementById(`Confirm${this.SpecyficPost.PostId}`).style.display="none";
    if(this.result==true){
      this.http.post(this.DetetePostUrl,{Value:this.SpecyficPost.PostId}).subscribe(
        res=>{
          this.messageProvider.AddMessage("Post deleted succesfully",types.success);
        },
        (err:HttpErrorResponse)=>{
          if(err.status!=404){
            this.messageProvider.AddMessage("Something went wrong, sorry :/",types.danger);
          }
          else
            this.messageProvider.AddCriticalError();
        }
      )
    }
  }

  ngOnInit() {
    console.log(this.SpecyficPost.Title);
    
  }

}
