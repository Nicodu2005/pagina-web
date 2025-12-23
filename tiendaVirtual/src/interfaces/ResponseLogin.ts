export interface IResponseBackend{
    ok:boolean;
    data:{
        message:string,
        token?:string
    },
    
}