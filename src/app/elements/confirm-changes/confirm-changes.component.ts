import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-confirm-changes',
  templateUrl: './confirm-changes.component.html',
  styleUrls: ['./confirm-changes.component.css']
})
export class ConfirmChangesComponent implements OnInit {

  constructor() { }
  @Input() Action:string;

  @Output() Result = new EventEmitter<boolean>();

  ConfirmButton(){
    this.Result.emit(true);
  }

  BackButton(){
    this.Result.emit(false);
  }

  ngOnInit() {
  }

}
