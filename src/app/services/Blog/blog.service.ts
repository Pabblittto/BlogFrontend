import { BlogModel } from './../../objects/Models/BlogModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Urls from "../../urls.json";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private DeleteBlogUrl= Urls.DeleteBlog;
  private GetBlog= Urls.GetBlog;

  constructor(private http:HttpClient) { }

  DeleteBlog(currentPassword:string):Observable<any>{
    return this.http.post(this.DeleteBlogUrl,{Value:currentPassword});
  }

  GetBlogInfo():Observable<BlogModel>{
    return this.http.post<BlogModel>(this.GetBlog,{});
  }
}
