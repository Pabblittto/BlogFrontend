import { NewPostModel } from './../../objects/Models/NewPostModel';
import { PostService } from './../../services/Post/post.service';
import { MessagesService } from './../../services/Messages/messages.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Post } from './../../objects/Post';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { analyzeNgModules } from '@angular/compiler';
import { types } from 'src/app/services/Messages/Message';
import {Location }from '@angular/common';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor(private http:HttpClient, 
              private messageProvider:MessagesService,
              private _location:Location,
              private _postService:PostService) { }

  ngOnInit() {
    this.TagList=[];
    this.RegisteredTags=["Pierwszy","Drugi","czwarty","piaty","szusty","siudmy","ósmy","dziewiaty","dziesiaty","jedenasty","dwónasty","trzynasty","czternasty","piętnasty","szesnasty","siedemnasty","osiemnasty","dziewietnsty","elo","witam","heelllo"];
  }

  // Pools for creating new post
  NewPost:Post= new Post();
  Thumbnail:{name:string,value:string}={name:"",value:""};// object of Thumbnail, value is file converted to base64
  FileList:{name:string,value:string}[]=[];// list of files added to post
  TagList:string[]=[];// list of tags
  

  // Tags downloaded from base
  RegisteredTags:string[];//full list of tags downloaded from server



  // checking valibility of form
  FormIsValid:boolean=true;// it changes when user press add post button- form is checked then. 
                          // if form have some dangerous issues- it is changing to false
  WarningsOccured:boolean=false;// if there is some warnings like - no additional pictures added, or no thumbnail added- changes to true
  ListOfWarnings:string[]=[];//list of warnings/problems with form 
  @ViewChild("WarningDiv",{static:true}) WarningDiv:ElementRef<HTMLElement>;// anchor for warning div

  Back(){
    this._location.back();
  }

  AddPost(){
    this.ListOfWarnings=[];
    this.FormIsValid=true;
    this.WarningsOccured=false;

    var result:boolean=true;// decides if post can be added

    this.NewPost.Title.trim();
    this.NewPost.ContentOne.trim();
    this.NewPost.ContentTwo.trim();// delete all white spaces

    if(this.NewPost.Title==""){
      this.ListOfWarnings.push("Title field can not be empty!(REQUIRED)");
      this.FormIsValid=false;
      this.WarningsOccured=true;
    }

    if(this.NewPost.ContentOne==""){
      this.ListOfWarnings.push("Post need to contain some text!(REQUIRED)")
      this.FormIsValid=false;
      this.WarningsOccured=true;
    }

    if(this.NewPost.ContentTwo==""){
      this.ListOfWarnings.push("Second paragraph is empty")
      this.WarningsOccured=true;
    }

    if(this.FileList.length==0){
      this.ListOfWarnings.push("You didn't add any additional images")
      this.WarningsOccured=true;
    }

    if(this.Thumbnail.name==""){
      this.ListOfWarnings.push("You didn't add thumbnail image")
      this.WarningsOccured=true;
    }

    if(this.TagList.length==0){
      this.ListOfWarnings.push("You didn't add any Tags")
      this.WarningsOccured=true;
    }

    if(this.WarningsOccured){
      this.WarningDiv.nativeElement.style.display="block";// if some warnings occured- user see warning message
    }
    else{// if everything is perfect- send post to server
      this.SendPostToServer();  
    }

  }

  private SendPostToServer(){
    this.NewPost.PostTags=[...this.TagList];// add Tags
    this._postService.CreateNewPost({NewPost:this.NewPost,Thumbnail:this.Thumbnail,Images:[...this.FileList]})
    .subscribe(
      res=>{
        this.messageProvider.AddMessage("Your post was added succesfully",types.success);
        this._location.back();// to można zamienić na 
      },
      (err:HttpErrorResponse)=>{
        if(err.status!=404){
          this.messageProvider.AddMessage("Some problems occured during adding your post :c",types.danger);
        }
        else
          this.messageProvider.AddCriticalError();
      }
    );
  }

  WarningBack(){
    this.WarningDiv.nativeElement.style.display="none";
  }

  WarningConfirm(){
    this.SendPostToServer();
    this.WarningDiv.nativeElement.style.display="none";
  }

  ChoosenThumbnail(event){
    let reader:FileReader= new FileReader();
    let file:File=event.target.files[0];
    reader.readAsDataURL(file);

    reader.onloadend=()=>{
      this.Thumbnail.name=file.name;
      this.Thumbnail.value= reader.result.toString();// save result to value - to be able to display photo
    }
  }

  Deletethumbnail(){
    this.Thumbnail={name:"",value:""};
  }

  DeleteFile(element:{name:string,value:string}){
    let index=this.FileList.lastIndexOf(element);
    if(index!=-1)
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

  DeleteCerteinTag(event:string){
    let index=this.TagList.indexOf(event);

    if(index!=-1){
      this.TagList.splice(index,1);
    }
  }


  AddToTaglist(event:string){
    if(this.TagList.length!=0){
        for(let i=0; i<this.TagList.length;i++){
          if(this.TagList[i].toLowerCase()==event.toLowerCase()){// there already exist tag with such name
            break;
          }
          if(i==this.TagList.length-1)// if its the last element and loop was not breaked - add tag to list
            this.TagList.push(event);
        }
      }
      else{
        this.TagList.push(event);// if list is epmty
      }
  }
  

}
