export interface IResponseBackend<T>{
    ok:boolean;
    data?:T;
    message?: string;
}