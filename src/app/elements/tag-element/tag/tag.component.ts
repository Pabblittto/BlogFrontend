import { Router } from '@angular/router';
import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  constructor(private router: Router) { }

  @ViewChild('DeleteDiv',{static:false}) DeleteDiv:ElementRef<HTMLElement>;
  @Input() name:string="test";

  @Input() RouteToTag:boolean=true;// if tag was clicked do we want to move user to posts list with certain tag 

  @Output() SendTagToDelete= new EventEmitter<string>();

  ngOnInit() {
    
  }

  MoveToSearch(){// when tag will be clicked user is redirected to search with certain tag 
    if(this.RouteToTag==true)
      this.router.navigateByUrl("");// to trzeba dodać 
  }

  DeleteEvent(){
    this.SendTagToDelete.emit(this.name);
  }



}