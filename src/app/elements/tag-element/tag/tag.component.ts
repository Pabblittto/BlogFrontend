import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() name:string="";

  @Input() RouteToTag:boolean=true;// if tag was clicked do we want to move user to posts list with certain tag 

  ngOnInit() {
  }

  MoveToSearch(){// when tag will be clicked user is redirected to search with certain tag 
    if(this.RouteToTag==true)
    this.router.navigateByUrl("");// to trzeba dodać 
  }

}
