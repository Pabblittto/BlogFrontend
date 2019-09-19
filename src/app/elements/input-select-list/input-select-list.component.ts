import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-input-select-list',
  templateUrl: './input-select-list.component.html',
  styleUrls: ['./input-select-list.component.css']
})
export class InputSelectListComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

  TypedString:string="";

  DisplayOptions:boolean=false;

  PossibleOptions:string[];
  Alert:string="";

  HighlightedElement:number=-1;// highlighted element in list if user press key up or down  


  @ViewChild('OptionsContainer',{static:true}) OPTContainer:ElementRef<HTMLElement>;
  @Input() AllPossibleOptions:string[];//list of possible emenets to dpislay  

  @Output() SelectedOption= new EventEmitter<string>();

  OptionClick(value){//when user click on one of the option
    this.TypedString="";
    this.SelectedOption.emit(value);
  }

  HIDEHighlight(){
    this.HighlightedElement=-1;
  }

  ChangedInput(event:KeyboardEvent){// when user type something in tag input- sort all possible 
    if(event!=null && event.key!="ArrowUp" && event.key!="ArrowDown"){// dont highlight anything becouse user is tyming something
      this.HIDEHighlight();
    }

    if(this.TypedString==""){
      this.PossibleOptions=[...this.AllPossibleOptions];
      this.Alert="";
    }
    else{
      this.PossibleOptions=[];

      for(let i=0;i<this.AllPossibleOptions.length;i++){
        if(this.AllPossibleOptions[i].toLowerCase().includes(this.TypedString.toLowerCase())){
          this.PossibleOptions.push(this.AllPossibleOptions[i]);
        }
      }
      
      if(this.PossibleOptions.length==0)
        this.Alert="No matching elements";
      else
        this.Alert="";
    }


  }

  DisplayTagList(){
    this.DisplayOptions=true;
    this.ChangedInput(null);// update list if focused
  }

  HideTagList(){
    this.DisplayOptions=false;
  }
  
  SendSelected(){// emits selected option
    if(this.HighlightedElement!=-1){
      this.SelectedOption.emit(this.PossibleOptions[this.HighlightedElement]);
      // this.TypedString=this.PossibleOptions[this.HighlightedElement];// change input to optin choosed from list
      this.TypedString="";
    }
    else{
      if(this.TypedString!=""){// if it is not empty- sen its
      this.SelectedOption.emit(this.TypedString);
      this.TypedString="";
      }

    }
  }


  PressUPKey(){
    if(this.HighlightedElement>0){// if 
      this.HighlightedElement--;
    }
  }

  PressDOWNKey(){
    if(this.HighlightedElement<this.PossibleOptions.length){
      this.HighlightedElement++;
    }
  }


}
