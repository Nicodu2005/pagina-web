import "../css/Login.css";

interface RegistroForm {
  nombre: string;
  apellido: string;
  correoElectronico: string;
  telefono: number;
  password: string;
  password2: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  error?: string;
  loading?: boolean;
}

const LlenarForm: React.FC<RegistroForm> = ({
  nombre,
  apellido,
  correoElectronico,
  telefono,
  password,
  password2,
  error,
  loading,
  onChange,
  onSubmit,
}) => {
  return (
    <div className=" w-full min-h-screen flex justify-center items-center bg-gray-100 ">
      <div className="w-full bg-white p-8 max-w-3xl grap-6  rounded-xl border shadow-2xl  md:flex-col ">
        <h1 className="font-bold text-xl text-blue-500 md:text-5xl w-full p-6 ">
          Registrate !
        </h1>
        <form
          onSubmit={onSubmit}
          className="w-full md:w-full flex flex-col gap-4  px-2 md:px-4 "
        >
          <label
            htmlFor=""
            className="font-sans text-sm text-black-500 md:text-2xl"
          >
            {" "}
            Nombre
          </label>
          <input
            name="nombre"
            type="text"
            required
            className="border shadow-md shadow-gray-500/50 rounded-xl w-full px-4 py-1 hover:bg-gray-100"
            onChange={onChange}
            value={nombre}
          />

          <label
            htmlFor=""
            className="font-sans text-sm text-black-500 md:text-2xl"
          >
            Apellido
          </label>
          <input
            name="apellido"
            type="text"
            required
            className="border shadow-md shadow-gray-500/50 rounded-xl w-full px-4 py-1 hover:bg-gray-100"
            onChange={onChange}
            value={apellido}
          />

          <label
            htmlFor=""
            className="font-sans text-sm text-black-500 md:text-2xl"
          >
            Correo electronico
          </label>
          <input
            name="correoElectronico"
            type="email"
            required
            className="border shadow-md shadow-gray-500/50 rounded-xl w-full px-4 py-1 hover:bg-gray-100"
            onChange={onChange}
            value={correoElectronico}
          />

          <label
            htmlFor=""
            className="font-sans text-sm text-black-500 md:text-2xl"
          >
            Telefono
          </label>
          <input
            name="telefono"
            type="text"
            required
            className="border shadow-md shadow-gray-500/50 rounded-xl w-full px-4 py-1 hover:bg-gray-100"
            onChange={onChange}
            value={telefono}
          />

          <label
            htmlFor=""
            className="font-sans text-sm text-black-500 md:text-2xl"
          >
            Contraseña
          </label>
          <input
            name="password"
            className="border shadow-md shadow-gray-500/50 rounded-xl w-full px-4 py-1 hover:bg-gray-100"
            type="password"
            required
            id="password1"
            onChange={onChange}
            value={password}
          />

          <label
            htmlFor=""
            className="font-sans text-sm text-black-500 md:text-2xl"
          >
            Contraseña
          </label>
          <input
            name="password2"
            className="border shadow-md shadow-gray-500/50 rounded-xl w-full px-4 py-1 hover:bg-gray-100"
            type="password"
            id="password2"
            onChange={onChange}
            value={password2}
            required
          />
          {error && (
            <p className="text-red-500 text-1xl md:text-base">{error}</p>
          )}

          <button
            type="submit"
            className=" w-full md:w-auto  bg-green-500 shadow-md shadow-green-500/50 hover:bg-green-700 rounded-xl text-xl text-white h-10 hover:border"
            disabled={loading}
          >
            {loading ? "Registrando" : "Registrate"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default LlenarForm;
