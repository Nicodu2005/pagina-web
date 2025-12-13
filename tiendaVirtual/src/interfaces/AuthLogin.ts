
import type { Credenciales } from './ILogin';
import type { IResponseBackend } from './ResponseLogin';


export interface IAuthLogin{
login (credenciales:Credenciales): Promise<IResponseBackend>;
}