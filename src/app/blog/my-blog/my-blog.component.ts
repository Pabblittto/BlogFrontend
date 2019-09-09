import { Post } from './../../objects/Post';
import { BlogModel } from './../../objects/Models/BlogModel';
import { MessagesService } from './../../services/Messages/messages.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Urls from '../../urls.json';

@Component({
  selector: 'app-my-blog',
  templateUrl: './my-blog.component.html',
  styleUrls: ['./my-blog.component.css']
})
export class MyBlogComponent implements OnInit {

  // private GetBlogUrl=

  MyBlog:BlogModel;


  constructor(private http:HttpClient,private messageProvider:MessagesService) {

    this.MyBlog = new BlogModel({
      BlogName:"Blogname Test",
      Description:"this is my lovely blog hello people, i will describe some avesome dishes",
      Posts:[
        new Post({
          Title:"Test post",
          ContentOne:"Hello people this is content one, nice to meet you",
          ContentTwo: "helo this is contetn two",
          PostTags:["hello","hi","hey"]
        }),
        new Post({
          Title:"second post",
          ContentOne:"Hello people this is content one, nice to meet you",
          ContentTwo: "helo this is contetn two",
          PostTags:["hello","hi","hey"]
        })
      ]

    })

   }





  ngOnInit() {
  }

}
