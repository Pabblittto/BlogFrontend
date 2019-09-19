
import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-confirm-changes',
  templateUrl: './confirm-changes.component.html',
  styleUrls: ['./confirm-changes.component.css']
})
export class ConfirmChangesComponent implements OnInit {

  constructor() { }
  @Input() Action:string;//What kind of action should be checked

  @Output() Result = new EventEmitter<boolean>();
  @ViewChild("Background",{static:true}) backGround: ElementRef<HTMLElement>;

  ConfirmButton(){
    this.Result.emit(true);
  }

  BackButton(){
    this.Result.emit(false);
  }

  Hide(){
    this.backGround.nativeElement.style.display="none";
  }

  Show(){
    this.backGround.nativeElement.style.display="block";
  }

  ngOnInit() {
  }

}
