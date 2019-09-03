import { Message, types } from './../services/Messages/Message';
import { MessagesService } from './../services/Messages/messages.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-messages',
  templateUrl: './main-messages.component.html',
  styleUrls: ['./main-messages.component.css']
})
export class MainMessagesComponent implements OnInit {

  messlist:Message[]=[];

  constructor(private messageProvider:MessagesService) { }

  removefirstitem:boolean=false;

  ngOnInit() {
    this.messageProvider.MessagestreamObservable().subscribe(
      res=>{
      this.messlist.push(res);
        
        setTimeout(()=>{
          this.messlist.shift();
        },2000)
    })
  }

}
