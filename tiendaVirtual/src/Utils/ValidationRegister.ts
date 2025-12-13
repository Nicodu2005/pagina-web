import type { RegisterData } from './../interfaces/IRegister';
import type {IResponseBackend} from '../interfaces/ResponseLogin';

export const validateRegister=( RegisterData : RegisterData):IResponseBackend | null=>{

if (!RegisterData.nombre) {
      return{ok: false , data:{message:"nombre vacio"}};
     
    }
    if (!RegisterData.apellido) {
     return{ok: false , data:{message:"apellido vacio"}};
      
    }

    if (!RegisterData.correoElectronico) {
      return{ok: false , data:{message:"Correo Electronico vacio"}};
     
    }
    if (!RegisterData.telefono) {
     return{ok: false , data:{message:"telefono vacio"}};
     
    }

    if (!RegisterData.password || !RegisterData.password2) {
     return{ok: false , data:{message:"coontraseña vacio"}};
      
    }

    if (RegisterData.password != RegisterData.password2) {
      return{ok: false , data:{message:"Las contraseñas no coinciden"}};
    }
    return null;
};