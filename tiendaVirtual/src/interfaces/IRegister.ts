
export interface RegisterData  {
   nombre:string,
   apellido:string,
   correoElectronico:string,
   telefono:number,
   password:string,
   password2:string
};

export interface IFormRegister extends RegisterData{
    loading:boolean,
    error:string
};