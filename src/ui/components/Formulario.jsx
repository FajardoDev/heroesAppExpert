import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Error } from "../../heroes/components/Error";
import { AuthContext } from "../../auth";

export const Formulario = () => {
	const { login } = useContext(AuthContext);

	const [nombre, setNombre] = useState("");
	const [apellido, setApellido] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [telefono, setTelefono] = useState("");
	const [error, setError] = useState(false);

	const [inputInteractuado, setInputInteractuado] = useState(false);
	const [inputInteractuadoAp, setInputInteractuadoAp] = useState(false);
	const [inputInteractuadoEmail, setInputInteractuadoEmail] = useState(false);
	const [inputInteractuadoClave, setInputInteractuadoClave] = useState(false);
	const [inputInteractuadoTe, setInputInteractuadoTe] = useState(false);

	const verificarCaracteres = (valor) => valor.trim().length > 0;

	const onNombreChange = ({ target }) => {
		setNombre(target.value);

		setInputInteractuado(true);
	};
	const onApellidoChange = ({ target }) => {
		setApellido(target.value);
		setInputInteractuadoAp(true);
	};
	const onEmailChange = ({ target }) => {
		setEmail(target.value);
		setInputInteractuadoEmail(true);
	};
	const onPasswordChange = ({ target }) => {
		setPassword(target.value);
		setInputInteractuadoClave(true);
	};
	const onTelefonoChange = ({ target }) => {
		setTelefono(target.value);
		setInputInteractuadoTe(true);
	};

	const navigate = useNavigate();

	// Validar formulario
	const onHandleSubmit = (e) => {
		e.preventDefault();

		if ([nombre, apellido, email, password, telefono].includes("")) {
			setError("Todos los campos son requeridos");
			return;
		}

		//Todo:

		login(nombre);

		navigate("/login", {
			replace: true,
		});
	};

	return (
		<>
			<h2 className="text-center text-xl font-extrabold text-indigo-500">
				{error ? <Error>{error}</Error> : "Registrate"}
			</h2>

			<form onSubmit={onHandleSubmit}>
				<label className="block mb-4">
					<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  text-slate-300 mb-2 dark:text-indigo-500 font-bold  mt-5">
						Nombre:
					</span>
					<input
						onChange={onNombreChange}
						// value={nombre}
						defaultValue={nombre}
						type="text"
						id="nombre"
						name="nombre"
						className={`bg-white w-full placeholder:italic border  block  rounded-md py-2 px-3 shadow-sm shadow-black/50 focus:outline-none sm:text-sm text-slate-700 font-semibold text-base focus:ring-1 ${
							inputInteractuado
								? verificarCaracteres(nombre)
									? "focus:border-sky-500 focus:ring-sky-500 border border-slate-300 "
									: " placeholder:text-red-600/60 focus:border-red-500 focus:ring-red-500 border border-red-600"
								: ""
						}   `}
						placeholder={
							inputInteractuado
								? verificarCaracteres(nombre)
									? ""
									: "El campo Nombre es requerido"
								: "Nombre del Cliente"
						}
					/>
				</label>

				<label className="block mb-4">
					<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  text-slate-300 mb-2 dark:text-indigo-500 font-bold mt-5">
						Apellido:
					</span>
					<input
						onChange={onApellidoChange}
						// value={apellido}
						defaultValue={apellido}
						id="apellido"
						type="text"
						name="apellido"
						className={`bg-white w-full placeholder:italic border  block  rounded-md py-2 px-3 shadow-sm shadow-black/50 focus:outline-none sm:text-sm text-slate-700 font-semibold text-base focus:ring-1 ${
							inputInteractuadoAp
								? verificarCaracteres(apellido)
									? "focus:border-sky-500 focus:ring-sky-500 border border-slate-300 "
									: " placeholder:text-red-600/60 focus:border-red-500 focus:ring-red-500 border border-red-600"
								: ""
						}   `}
						placeholder={
							inputInteractuadoAp
								? verificarCaracteres(apellido)
									? ""
									: "El campo apellido es requerido"
								: "apellido del Cliente"
						}
					/>
				</label>

				<label className="block mb-4">
					<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  text-slate-300 mb-2 dark:text-indigo-500 font-bold mt-5">
						E-mail:
					</span>
					<input
						onChange={onEmailChange}
						// value={email}
						defaultValue={email}
						id="email"
						type="email"
						name="email"
						className={`bg-white w-full placeholder:italic border  block  rounded-md py-2 px-3 shadow-sm shadow-black/50 focus:outline-none sm:text-sm text-slate-700 font-semibold text-base focus:ring-1 ${
							inputInteractuadoEmail
								? verificarCaracteres(email)
									? "focus:border-sky-500 focus:ring-sky-500 border border-slate-300 "
									: " placeholder:text-red-600/60 focus:border-red-500 focus:ring-red-500 border border-red-600"
								: ""
						}   `}
						placeholder={
							inputInteractuadoEmail
								? verificarCaracteres(email)
									? ""
									: "El campo E-mail es requerido"
								: "Email del Cliente"
						}
					/>
				</label>

				<label className="block mb-4">
					<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  text-slate-300 mb-2 dark:text-indigo-500 font-bold mt-5">
						Password:
					</span>
					<input
						onChange={onPasswordChange}
						// value={email}
						defaultValue={password}
						id="password"
						type="password"
						name="password"
						className={`bg-white w-full placeholder:italic border  block  rounded-md py-2 px-3 shadow-sm shadow-black/50 focus:outline-none sm:text-sm text-slate-700 font-semibold text-base focus:ring-1 ${
							inputInteractuadoClave
								? verificarCaracteres(password)
									? "focus:border-sky-500 focus:ring-sky-500 border border-slate-300 "
									: " placeholder:text-red-600/60 focus:border-red-500 focus:ring-red-500 border border-red-600"
								: ""
						}   `}
						placeholder={
							inputInteractuadoClave
								? verificarCaracteres(password)
									? ""
									: "El campo Contraseña es requerido"
								: "Contraseña del Cliente"
						}
					/>
				</label>

				<label className="block mb-4">
					<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm  text-slate-300 mb-2 dark:text-indigo-500 font-bold mt-5">
						Teléfono:
					</span>
					<input
						onChange={onTelefonoChange}
						// value={telefono}
						defaultValue={telefono}
						id="telefono"
						type="tel"
						name="telefono"
						className={`bg-white w-full placeholder:italic border  block  rounded-md py-2 px-3 shadow-sm shadow-black/50 focus:outline-none sm:text-sm text-slate-700 font-semibold text-base focus:ring-1 ${
							inputInteractuadoTe
								? verificarCaracteres(telefono)
									? "focus:border-sky-500 focus:ring-sky-500 border border-slate-300 "
									: " placeholder:text-red-600/60 focus:border-red-500 focus:ring-red-500 border border-red-600"
								: ""
						}   `}
						placeholder={
							inputInteractuadoTe
								? verificarCaracteres(telefono)
									? ""
									: "El campo Teléfono es requerido"
								: "Teléfono del Cliente"
						}
					/>
				</label>

				<input
					type="submit"
					className=" cursor-pointer mt-5 w-full bg-blue-800 p-2 rounded-md shadow-sm shadow-black font-bold text-white text-lg hover:bg-blue-700 transition-colors"
					value="Registrar Cliente"
				/>
			</form>
		</>
	);
};
