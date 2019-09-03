import { Observable, of, Subject } from 'rxjs';
import { Message, types } from './Message';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {// service for transewr messenge from anywhere to main-messages component


  private MessageStream = new Subject<Message>();
  
  AddMessage(message:string, type:types){
    this.MessageStream.next( new Message(message,type));
  }

  MessagestreamObservable(): Subject<Message>{
    return this.MessageStream;
  }


  AddCriticalError(){//it adds 404 error to list
    this.AddMessage("Can't connect to the server! Check internet connection",types.danger);
  }


  constructor() { }
}
