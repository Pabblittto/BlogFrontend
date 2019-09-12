import { Router } from '@angular/router';
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

   private GetBlogUrl=Urls.GetBlog;

  MyBlog:BlogModel;

  AddPostButton(){
    this.router.navigateByUrl("/blog/addPost");
  }

  ChangeDescription(){
    document.getElementById("DescriptionEdit").style.display="block";
  }

  constructor(private http:HttpClient,private messageProvider:MessagesService,private router:Router) {

    this.MyBlog = new BlogModel({
      BlogName:"Blogname Test",
      Description:"this is my lovely blog hello people, i will describe some avesome dishes",
      Posts:[
        new Post({
          PostId:1,
          Title:"asdasdasd",
          ContentOne:"Hello people this is content one, nice to meet you",
          ContentTwo: "helo this is contetn two",
          PostTags:["hello","hi","hey"]
        }),
        new Post({
          PostId:2,
          Title:"Another post",
          ContentOne:"Hello people this is content one, nice to meet you",
          ContentTwo: "helo this is contetn two",
          PostTags:["hello","hi","hey"]
        }),
        new Post({
          PostId:3,
          Title:"i jeszcze kolejny, niezla jazda",
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
