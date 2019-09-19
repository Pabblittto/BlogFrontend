import { NewPostModel } from './../../objects/Models/NewPostModel';
import { Post } from './../../objects/Post';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Urls from '../../urls.json';
import { Observable } from 'rxjs';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private CertainPost = Urls.CertainPostUrl;
  private AddPost= Urls.AddPost;
  private DeletePost= Urls.DeletePost;
  private NumberOfPosts= Urls.GetNumberOfPostsInBlog;
  private GetSectionOfPosts=Urls.GetPartOfPosts;

  constructor(private http: HttpClient) { }


  GetCertainPost(id:string):Observable<Post>{
    return this.http.post<Post>(this.CertainPost,{"PostId":id});
  }

  CreateNewPost(model:NewPostModel){
    return this.http.post(this.AddPost,model);
  }

  DeleteCertainPost(PostId:string):Observable<any>{
    return this.http.post(this.DeletePost,{value:PostId});
  }

  GetNumberOfAllPosts():Observable<number>{
    return this.http.post<number>(this.NumberOfPosts,{});
  }

  
  GetPostSection(start:number,end:number):Observable<Post[]>{
    return this.http.post<Post[]>(this.GetSectionOfPosts,{start:start,end:end});
  }

}
