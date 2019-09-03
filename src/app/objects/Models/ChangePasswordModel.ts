export class ChangePasswordModel{
    NewPassword:string;
    ConfirmNewPassword:string;
    OldPassword:string;

    constructor(model?:any){
        model && model.NewPassword? this.NewPassword=model.NewPassword:this.NewPassword="";
        model && model.ConfirmNewPassword? this.ConfirmNewPassword=model.ConfirmNewPassword:this.ConfirmNewPassword="";
        model && model.OldPassword? this.OldPassword=model.OldPassword:this.OldPassword="";
    }
}