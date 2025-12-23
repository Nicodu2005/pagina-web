import { Routes, Route } from "react-router-dom";
import Login from "./Page/LoginPage";
import Registro from "./Page/RegistroPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Menu from "./components/menu";
import AuthProvider from "./context/AuthContext";
import Producto from "./Page/productos";
import { useLocation } from "react-router-dom";


function App() {
  const location = useLocation();
  const hideMenu= location.pathname==="/Login" || location.pathname==="/Registro"
  
  return (
    <>
    <AuthProvider>
      {!hideMenu && <Menu/>}
      <ToastContainer position="top-right" />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Registro" element={<Registro />} />
       <Route path="/productos" element={<Producto/>} />
      </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
