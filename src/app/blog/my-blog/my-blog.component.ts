import { PostService } from './../../services/Post/post.service';
import { ConfirmIdentityComponent } from './../../elements/confirm-identity/confirm-identity.component';
import { ConfirmChangesComponent } from './../../elements/confirm-changes/confirm-changes.component';
import { BlogService } from './../../services/Blog/blog.service';
import { Router } from '@angular/router';
import { Post } from './../../objects/Post';
import { BlogModel } from './../../objects/Models/BlogModel';
import { MessagesService } from './../../services/Messages/messages.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { types } from 'src/app/services/Messages/Message';
import { collectExternalReferences } from '@angular/compiler';


@Component({
  selector: 'app-my-blog',
  templateUrl: './my-blog.component.html',
  styleUrls: ['./my-blog.component.css']
})
export class MyBlogComponent implements OnInit {


  MyBlog:BlogModel= new BlogModel();
  @ViewChild("ConfirmChanges",{static:true}) ConfirmChanges:ConfirmChangesComponent;
  @ViewChild("ConfirmIdentity",{static:false}) ConfirmIdentity:ConfirmIdentityComponent;
  AllPosts:number;

  AddPostButton(){
    this.router.navigateByUrl("/blog/addPost");
  }

  ngOnInit() {
    this._postService.GetPostSection(0,6).subscribe(
      res=>{
        this.MyBlog.Posts=res;
      },
      (err:HttpErrorResponse)=>{
        if(err.status!=404)
          this.messageProvider.AddMessage("Can not recive your posts",types.danger);
        else
          this.messageProvider.AddCriticalError();
      }
    );

    this._postService.GetNumberOfAllPosts().subscribe(
      res=>{
        this.AllPosts=res;
      },
      (err:HttpErrorResponse)=>{
        if(err.status!=404)
        this.messageProvider.AddMessage("Can not recive number of all posts!",types.danger);
        else
        this.messageProvider.AddCriticalError();
      }
    );

    this._blogservice.GetBlogInfo().subscribe(
      res=>{
        console.log(res);
        
        this.MyBlog.BlogName=res.BlogName;
        this.MyBlog.DateOfCreated=res.DateOfCreated;
        this.MyBlog.Description=res.Description;
      },
      (err:HttpErrorResponse)=>{
        if(err.type!=404)
          this.messageProvider.AddMessage("Can not recive data about your blog",types.danger);
        else
          this.messageProvider.AddCriticalError();
      }

    )
  };



  ChangeDescription(){
    document.getElementById("DescriptionEdit").style.display="block";
  }



  constructor(private http:HttpClient,
    private messageProvider:MessagesService,
    private router:Router,
    private _blogservice:BlogService,
    private _postService:PostService) 
    {
      
   }


  DeleteBlogButton(){
    this.ConfirmChanges.Show();// show confirm changes
  }

  ResultOfChanges(event:boolean){
    // this.ConfirmChanges.nativeElement.style.display="none";// hide confirmation screen
    this.ConfirmChanges.Hide();
    if(event==true){// if user want to delete blog
      this.ConfirmIdentity.Show();// lests show password input
    }
  }
  
  RecivePasswordDeleteBlog(event:string){
    this._blogservice.DeleteBlog(event).subscribe(
      res=>{
        this.messageProvider.AddMessage("Blog deleted successfull",types.success);
        alert("trzebazresetowac widoczek");
      },
      (err:HttpErrorResponse)=>{
        if(err.status!=404)
          this.messageProvider.AddMessage("Something went wrong with deleting blog :c",types.danger);
        else
          this.messageProvider.AddCriticalError();
      }
    )
  }



}
