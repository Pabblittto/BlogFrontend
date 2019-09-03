
export class Message{
    message:string;
    type:types;
    constructor(mess?:string,ty?:types){
        if(mess)
            this.message=mess;
        else
            this.message='';

        if(ty)
            this.type=ty;
        else
         this.type=types.success;
        }

}


export enum types{
danger=1,
success=2

}
