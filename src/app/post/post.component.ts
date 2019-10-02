import { MessagesService } from './../services/Messages/messages.service';
import { PostService } from './../services/Post/post.service';
import { Post } from './../objects/Post';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import {types} from '../services/Messages/Message';
import Urls from "../urls.json";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  BaseServerPath:string=Urls.MyServerPath;
  id:string;
  constructor(private route : ActivatedRoute, private postprovider : PostService,private message:MessagesService) {
    this.id=this.route.snapshot.paramMap.get('id');

    postprovider.GetCertainPost(this.id).subscribe(
      res=>{
        this._post=res;
      },
      (err: HttpErrorResponse)=>{
        if(err.status!=404)//if error is not conneted with server activity
        this.message.AddMessage("This post does not exists :/",types.danger)
        else
        this.message.AddCriticalError();
      }
    )
  }

  _post:Post = new Post({"Title":"FatCat is one of the best :P",
  "Thumbnail":"https://img.huffingtonpost.com/asset/598cc71515000084208b6139.jpg?ops=scalefit_820_noupscale",
  "ContentOne":"First content about cat",
  "ContentTwo":"Second content, hello",
  "PostTags": ["siemaneczko","tag","no_witam","motoryzacja","samochody","fast","acceleration","hello","siemaneczko","tag","no_witam","motoryzacja","samochody","fast","acceleration","hello","siemaneczko","tag","no_witam","motoryzacja","samochody","fast","acceleration","hello"]
});

  ngOnInit() {
  }

}
