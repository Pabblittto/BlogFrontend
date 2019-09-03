import { Post } from './../objects/Post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {


  PostList:Post[]=[];
  


  constructor() {
    this.PostList.push(
      new Post({
        "Title":"FatCat is one of the best :P",
        "Thumbnail":"https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/blogs/79807/2014/02/144142-145634.png?itok=qdB0-Tkk",
        "ContentOne":"First content about cat",
        "ContentTwo":"Second content, hello",
        "PostId":1
    }),
      new Post({
        "Title":"Really fast red car is really fast",
        "Thumbnail":"https://img.huffingtonpost.com/asset/598cc71515000084208b6139.jpg?ops=scalefit_820_noupscale",
        "ContentOne":"First content about car, it is not tht slow",
        "ContentTwo":"Second content, hello",
        "PostId":3
      }),
      new Post({
        "Title":"10101010101010101010101010101010101010101010101010",
        "Thumbnail":"https://d17fnq9dkz9hgj.cloudfront.net/uploads/2018/04/Pomeranian_02.jpg",
        "ContentOne":"1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 ",
        "ContentTwo":"Second content, hello",
        "PostId":2
      })

    )
   }

  ngOnInit() {
    
  }

}
