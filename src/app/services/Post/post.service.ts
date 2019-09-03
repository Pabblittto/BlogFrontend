import { Post } from './../../objects/Post';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Urls from '../../urls.json';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private CertainPost = Urls.CertainPostUrl;

  constructor(private http: HttpClient) { }


  GetCertainPost(id:string):Observable<Post>{
    return this.http.post<Post>(this.CertainPost,{"PostId":id});
  }


}
