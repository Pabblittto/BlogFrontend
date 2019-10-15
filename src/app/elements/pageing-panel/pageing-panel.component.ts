import { MessagesService } from './../../services/Messages/messages.service';
import { HttpErrorResponse } from '@angular/common/http';
import { PostService } from './../../services/Post/post.service';
import { MyBlogComponent } from './../../blog/my-blog/my-blog.component';
import { Component, OnInit, Input } from '@angular/core';
import { types } from 'src/app/services/Messages/Message';

@Component({
  selector: 'app-pageing-panel',
  templateUrl: './pageing-panel.component.html',
  styleUrls: ['./pageing-panel.component.css']
})
export class PageingPanelComponent implements OnInit {

  constructor(
    private _postService:PostService,
    private messageProvider:MessagesService
    ) { }
  ngOnInit() {
    this.RefreshNumberOfAllPosts();

  }

  @Input() ParentMyBlog:MyBlogComponent;// to sprawia że component nie jest możliwy do użycie ponowanie :c 
  NumberOfSites:number=0;
  NumberOfAllPosts:number=0;
  NumberArray:number[];

  public RefreshNumberOfAllPosts(){// function for refreshing number of pages- need to use when some posts is deleted
    this._postService.GetNumberOfAllPosts().subscribe(
      res=>{
        this.NumberOfAllPosts=res;
        this.NumberOfSites= Math.ceil(this.NumberOfAllPosts/6);// because there are 6 posts on page
        this.NumberArray= Array(this.NumberOfSites).fill(0).map((x,i)=>i+1);
      },
      (err:HttpErrorResponse)=>{
        if(err.status!=404)
        this.messageProvider.AddMessage("Can not recive number of all posts!",types.danger);
        else
        this.messageProvider.AddCriticalError();
      }
    );
  }

  public GoToPage(number:number){
    this.ParentMyBlog.PageNumber=number;
    this.ParentMyBlog.GetSomePosts(number);
  }

}
