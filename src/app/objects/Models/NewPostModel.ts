import { Post } from './../Post';


export class NewPostModel{
    NewPost:Post;
    Thumbnail:{name:string,value:string};
    Images:{name:string,value:string}[];
}