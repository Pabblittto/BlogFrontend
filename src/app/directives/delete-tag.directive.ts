import { Directive, Input, Output, EventEmitter, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDeleteTag]'
})
export class DeleteTagDirective {

  constructor(private el: ElementRef) { }

  @Input() TagName:string;

  @Output() DeleteTag = new EventEmitter<string>();// emits its own name, so parent component know what tag neet to be deleted from list

  OnHover(){// when user hover cursor over element- display cross

  }

}
