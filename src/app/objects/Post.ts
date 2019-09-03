import { Comment } from './Comment';
import { ComponentFixture } from '@angular/core/testing';

export class Post{
    PostId: number;
    Thumbnail:string;// url to the photo
    Title: string;
    ContentOne: string;
    ContentTwo: string;
    Date: Date;
    BlogId: number;
    PostTags: string[];
    Comments:Comment[];
    Images:string[];


    constructor(post?:any){
        post && post.Thumbnail ? this.Thumbnail=post.Thumbnail : this.Thumbnail="";
        post && post.Title ? this.Title=post.Title : this.Title="";
        post && post.ContentOne ? this.ContentOne=post.ContentOne : this.ContentOne="";
        post && post.ContentTwo ? this.ContentTwo=post.ContentTwo : this.ContentTwo="";
        post && post.Date ? this.Date=post.date : this.Date=new Date(2000,1,1);
        post && post.PostId ? this.PostId=post.PostId : this.PostId=1;
        post && post.BlogId ? this.BlogId=post.BlogId : this.BlogId=1;
        post && post.PostTags ? this.PostTags=[...post.PostTags] : this.PostTags=[];
    }
}