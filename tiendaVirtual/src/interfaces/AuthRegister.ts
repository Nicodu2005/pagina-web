import type {IResponseBackend} from '../interfaces/ResponseLogin';
import type { RegisterData } from '../interfaces/IRegister';

export interface IAuthRegister {
    register(registerData : RegisterData ):Promise <IResponseBackend<ResponseRegister>>;
}

export interface ResponseRegister{
    ok:boolean;

    message:string
}