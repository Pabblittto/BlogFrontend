import { MessagesService } from './../../services/Messages/messages.service';
import { HttpClient } from '@angular/common/http';
import { Post } from './../../objects/Post';
import { Component, OnInit } from '@angular/core';
import { analyzeNgModules } from '@angular/compiler';
import { types } from 'src/app/services/Messages/Message';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor(private http:HttpClient, private messageProvider:MessagesService) { }

  ngOnInit() {
    this.TagList=[];
    this.RegisteredTags=["Pierwszy","Drugi","czwarty","piaty","szusty","siudmy","ósmy","dziewiaty","dziesiaty","jedenasty","dwónasty","trzynasty","czternasty","piętnasty","szesnasty","siedemnasty","osiemnasty","dziewietnsty","elo","witam","heelllo"];
  }

  NewPost:Post= new Post();
  Thumbnail:{name:string,value:string};// object of Thumbnail, value is file converted to base64

  FileList:{name:string,value:string}[]=[];// list of files added to post
  TagList:string[]=[];// list of tags

  RegisteredTags:string[];//full list of tags downloaded from server


  ChoosenThumbnai(event){
    console.log(event);
    let reader:FileReader= new FileReader();
    let file:File=event.target.files[0];
    reader.readAsDataURL(file);

    reader.onloadend=()=>{
      this.Thumbnail.name=file.name;
      this.Thumbnail.value= reader.result.toString();// save result to value - to be able to display photo
    }
  }



  DeleteFile(element:{name:string,value:string}){
    let index=this.FileList.lastIndexOf(element);
    if(index!=null)
    this.FileList.splice(index,1);
  }

  AddToFileList(event){
    
    const Myfiles:File[]=event.target.files;

    if(Myfiles==null)
    return null;// if list is empty return null

    for(let i=0;i < Myfiles.length;i++ ){
      if(Myfiles[i].type.includes("image/")){
        let reader= new FileReader();
        reader.readAsDataURL(Myfiles[i]);

        reader.onloadend=()=>{
          this.FileList.push({name:Myfiles[i].name , value: reader.result.toString()})
        }
      }
      else{
        this.messageProvider.AddMessage(`File "${Myfiles[i].name}" is not image`,types.danger);
      }

    }

  }

  DeleteCerteinTag(value:string){
    let index=this.TagList.indexOf(value);

    if(index!=null){
      
    }


  }


  AddToTaglist(event:string){
    if(this.TagList.length!=0){
        for(let i=0; i<this.TagList.length;i++){
          if(this.TagList[i].toLowerCase()==event.toLowerCase())// there already exist tag with such name
            break;
          
          if(i==this.TagList.length-1)// if its the last element and loop was not breaked - add tag to list
            this.TagList.push(event);
        }
      }
      else{
        this.TagList.push(event);// if list is epmty
      }
  }
  

}
