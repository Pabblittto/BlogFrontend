import { Post } from './../../objects/Post';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-post-element',
  templateUrl: './post-element.component.html',
  styleUrls: ['./post-element.component.css']
})
  export class PostElementComponent implements OnInit {


@Input() _post: Post;



  ngOnInit() {
  }

}
