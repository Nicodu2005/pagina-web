import { Routes, Route } from "react-router-dom";
import Login from "./Page/LoginPage";
import Registro from "./Page/RegistroPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Menu from "./components/menu";
import AuthProvider from "./context/AuthContext";
import Producto from "./Page/productos";
import DetalleProducto from "./Page/DetalleProducto"
import { useLocation } from "react-router-dom";
import  { useState } from "react";
import  CartProvider  from "./context/CarritoContext";


function App() {
  const location = useLocation();
  const hideMenu= location.pathname==="/Login" || location.pathname==="/Registro"
  const [palabra,setPalabra] = useState<string>("");


  return (
    <>
    <AuthProvider>
      <CartProvider>
      {!hideMenu && <Menu palabra={palabra} setPalabra={setPalabra}/>}
      <ToastContainer position="top-right" />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Registro" element={<Registro />} />
       <Route path="/productos" element={<Producto palabra={palabra} setPalabra={setPalabra}/>} />
       <Route path="/producto/:id_producto" element={<DetalleProducto />} />
      </Routes>
      </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
