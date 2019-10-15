import { PageingPanelComponent } from './../../elements/pageing-panel/pageing-panel.component';
import { PostModyficationPanelComponent } from './../../elements/post-modyfication-panel/post-modyfication-panel.component';
import { EditDescriptionComponent } from './../edit-description/edit-description.component';
import { PostService } from './../../services/Post/post.service';
import { ConfirmIdentityComponent } from './../../elements/confirm-identity/confirm-identity.component';
import { ConfirmChangesComponent } from './../../elements/confirm-changes/confirm-changes.component';
import { BlogService } from './../../services/Blog/blog.service';
import { Router } from '@angular/router';
import { Post } from './../../objects/Post';
import { BlogModel } from './../../objects/Models/BlogModel';
import { MessagesService } from './../../services/Messages/messages.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList, ContentChildren, AfterContentInit } from '@angular/core';
import { types } from 'src/app/services/Messages/Message';
import { collectExternalReferences, ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-my-blog',
  templateUrl: './my-blog.component.html',
  styleUrls: ['./my-blog.component.css']
})
export class MyBlogComponent implements OnInit {


  ThisObject:MyBlogComponent;
  MyBlog:BlogModel= new BlogModel();
  @ViewChild(PageingPanelComponent,{static:true}) PageingElement:PageingPanelComponent;
  @ViewChild("ConfirmChanges",{static:true}) ConfirmChanges:ConfirmChangesComponent;
  @ViewChild("ConfirmIdentity",{static:false}) ConfirmIdentity:ConfirmIdentityComponent;
  @ViewChild("EditDescription",{static:true}) EsitDescriptin:EditDescriptionComponent;
  // @ViewChildren(PostModyficationPanelComponent) ListOfPanel:QueryList<PostModyficationPanelComponent>//> to ne dzała odpowedno lsta jest pusta
  NumberOfAllPosts:number;
  ListOfPanel:PostModyficationPanelComponent[]=[]; 
  PageNumber:number=1;// number of current page - at the beggining always "1"


  AddPostButton(){
    this.router.navigateByUrl("/blog/addPost");
  }

  
  constructor(private http:HttpClient,
    private messageProvider:MessagesService,
    private router:Router,
    private _blogservice:BlogService,
    private _postService:PostService) 
    {
    this.GetSomePosts(this.PageNumber);      
    this.ThisObject=this;
   }


  ngOnInit() {


    this._postService.GetNumberOfAllPosts().subscribe(
      res=>{
        this.NumberOfAllPosts=res;
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

  public GetSomePosts(page:number){// download posts from server according which page it is

    this.MyBlog.Posts=[];
    this._postService.GetPostSection((page-1)*6,page*6-1).subscribe(
      res=>{
        this.MyBlog.Posts=res;     
        window.scroll(0,0);   
      },
      (err:HttpErrorResponse)=>{
        if(err.status!=404)
          this.messageProvider.AddMessage("Can not recive your posts",types.danger);
        else
          this.messageProvider.AddCriticalError();
      }
    );

  }

  public RenderSiteAgain(){
    this.GetSomePosts(this.PageNumber)
  }


  ChangeDescription(){
    this.EsitDescriptin.SetDescription(this.MyBlog.Description);
    document.getElementById("DescriptionEdit").style.display="block";
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
        this.PageingElement.RefreshNumberOfAllPosts();
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
