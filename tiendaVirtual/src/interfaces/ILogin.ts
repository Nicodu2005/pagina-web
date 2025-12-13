export interface Credenciales {
    user: string,
    password: string
}

export default interface IFormLoginState extends Credenciales{
    loading: boolean 
}

