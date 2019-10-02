import { Post } from './../../objects/Post';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import Urls from "../../urls.json";


@Component({
  selector: 'app-post-element',
  templateUrl: './post-element.component.html',
  styleUrls: ['./post-element.component.css']
})
  export class PostElementComponent implements OnInit {


@Input() _post: Post;

  ServerBasicPath:string= Urls.MyServerPath;


  ngOnInit() {
  }

}
