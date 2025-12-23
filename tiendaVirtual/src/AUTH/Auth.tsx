export default class AuthTokenService{
    static savetoken(token: string){
        localStorage.setItem('token',token)
    }
    static getToken(){
        localStorage.getItem('token');
    }
    static removeToken(){
        localStorage.removeItem('token');
    }
}