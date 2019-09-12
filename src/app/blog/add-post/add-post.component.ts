import { Post } from './../../objects/Post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor() { }

  NewPost:Post= new Post();

  

  ngOnInit() {
  }

}
