import React, { useState } from "react";
import "../css/Login.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LlenarForm from "../components/FormRegister";
import type { IFormRegister } from "../interfaces/IRegister";
import type { RegisterData } from "../interfaces/IRegister";
import { validateRegister } from "../Utils/ValidationRegister";
import { Registerservice } from "../service/Registerservice";

const service = new Registerservice();
function Registro() {
  const [formdata, setformdata] = useState<IFormRegister>({
    nombre: "",
    apellido: "",
    correoElectronico: "",
    telefono: 0,
    password: "",
    password2: "",
    error: "",
    loading: false,
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      try{
    
    e.preventDefault();

    setformdata({ ...formdata, error: "" });

    const {
      nombre,
      apellido,
      correoElectronico,
      telefono,
      password,
      password2,
    } = formdata;

    const RegisterDataO: RegisterData = {
      nombre,
      apellido,
      correoElectronico,
      telefono,
      password,
      password2,
    };

    setformdata((prev) => ({ ...prev, loading: true }));

    const resultvalidateRegister = validateRegister(RegisterDataO);
    if (resultvalidateRegister) {
      toast.error(resultvalidateRegister.data.message);
      return
    }

    const response = await service.register(RegisterDataO);
    console.log(response.ok);

    if (response.ok) {
      toast.success(response.data.message);
      navigate("/Login")
    } else {
      toast.error(response.data.message);
    }
    setformdata((prev) => ({ ...prev, loading: false }));
  }catch(error){
    console.log(error)
    toast.error("Error de servidor")
  }finally{
    setformdata((prev) => ({ ...prev, loading: false }));
  }
};
  return (
    <LlenarForm
      nombre={formdata.nombre}
      apellido={formdata.apellido}
      correoElectronico={formdata.correoElectronico}
      telefono={formdata.telefono}
      password={formdata.password}
      password2={formdata.password2}
      error={formdata.error}
      onChange={handleChange}
      onSubmit={handleSubmit}
      loading={formdata.loading}
    />
  );
}

export default Registro;
