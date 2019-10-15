import { MyBlogComponent } from './../../blog/my-blog/my-blog.component';
import { Subject, asapScheduler } from 'rxjs';
import { PostService } from './../../services/Post/post.service';
import { ConfirmChangesComponent } from './../confirm-changes/confirm-changes.component';
import { Post } from './../../objects/Post';
import { MessagesService } from './../../services/Messages/messages.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { types } from 'src/app/services/Messages/Message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-modyfication-panel',
  templateUrl: './post-modyfication-panel.component.html',
  styleUrls: ['./post-modyfication-panel.component.css']
})
export class PostModyficationPanelComponent implements OnInit {

  constructor(private http : HttpClient,
    private messageProvider:MessagesService,
    private _postService:PostService,
    private router : Router    
    ) {

     }

  @Input("MyBlog") ParentMyBlog:MyBlogComponent;
  @Input() SpecyficPost:Post;
  @ViewChild(ConfirmChangesComponent,{static:false}) ConfirmChanges:ConfirmChangesComponent;

  Information:string;
  result:boolean;

  DeleteButton(){// Delete button sends request to server, edit button redirect to another site
    this.Information="Delete post "+"''"+ this.SpecyficPost.Title+"'";

    this.ConfirmChanges.Show();
    // document.getElementById(`Confirm${this.SpecyficPost.PostId}`).style.display="block";
  }

  GetResult(event:boolean):void{
    this.result=event;
    this.ConfirmChanges.Hide();
    if(this.result==true){

      this._postService.DeleteCertainPost(this.SpecyficPost.PostId.toString()).subscribe(
        res=>{
          this.messageProvider.AddMessage("Post deleted succesfully",types.success);
// tu muisi być wczytanie całego okna, program pobiera ścieżkę z urla i ją wczytujejeszcz
           this.ParentMyBlog.RenderSiteAgain();

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
