export interface IGetAdminInvests{
    id:number;
    name?:string | null;
    state:string | null;
    user:{
        id:string,
        userName:string,
        fullname:string
    };
    sum:number;
    date:string | null;
    isInvest: boolean;
    reciver:string | null;
    bankAccount : {
        name:string,
        iban:string
    }
    clickAcceptFunction:Function,
    clickRejectFunction:Function
}