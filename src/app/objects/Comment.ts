export class Comment{
    CommentId:number;
    DateOfComment:Date;
    Content:string;
    OwnerId:number;
    OwnerImage:string;
    Answers: Comment[];

    constructor(comment?:any){
        comment && comment.CommentId? this.CommentId=comment.CommentId : this.CommentId=0;
        comment && comment.Content? this.Content=comment.Content : this.Content="";
        comment && comment.OwnerId? this.OwnerId=comment.OwnerId: this.OwnerId=0;
        comment && comment.OwnerImage? this.OwnerImage=comment.OwnerImage : this.OwnerImage="";
        comment && comment.Answers? this.Answers=[...comment.Answers] : this.Answers=[];
    }
}