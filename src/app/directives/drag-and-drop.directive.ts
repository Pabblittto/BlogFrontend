import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDragAndDrop]'
})
export class DragAndDropDirective {

  constructor(private el:ElementRef) {

   }


  @HostListener("drop",["$event"]) Mydrop(event:DragEvent){
    event.preventDefault();
    let dummyevent={target:{files:event.dataTransfer.files}};// structure simmilar to normal event(when file input is clicked)

    this.eventOut.emit(dummyevent);
    this.el.nativeElement.style.backgroundColor="inherit";

  }

  @HostListener("dragover",["$event"]) Dragover(event:DragEvent){
    event.stopPropagation();
    event.preventDefault();

    this.el.nativeElement.style.backgroundColor="darkgray";

  }

  @HostListener("dragleave") OnDragLeave(){
    this.el.nativeElement.style.backgroundColor="inherit";
  }



  @Output() eventOut= new EventEmitter<any>();// output for sending files

}
