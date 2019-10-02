import { Post } from './../Post';
export class BlogModel{

    BlogName: string;
    DateOfCreated: Date;
    Description: string;
    Posts: Post[];


    constructor(model?:any){
        model && model.BlogName? this.BlogName=model.BlogName: this.BlogName="";
        model && model.DateOfCreated? this.DateOfCreated=model.DateOfCreated: this.DateOfCreated = new Date(2019,3) ;
        model && model.Description? this.Description=model.Description: this.Description="";
        model && model.Posts? this.Posts=[...model.Posts] : this.Posts=[];
    }
}