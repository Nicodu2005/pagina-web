import { Routes, Route } from "react-router-dom";
import Login from "./Page/LoginPage";
import Registro from "./Page/RegistroPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <ToastContainer position="top-right" />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Registro" element={<Registro />} />
      </Routes>
    </>
  );
}

export default App;
