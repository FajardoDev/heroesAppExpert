import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context";
import imagen from "../../../assets/heroes/banco.jpg";

export const LoginPage = () => {
	const { login } = useContext(AuthContext);
	const { logout } = useContext(AuthContext);

	const navigate = useNavigate();

	const { user } = useContext(AuthContext);

	const onLogin = () => {
		//! Funciona
		if (!login) {
			login(user?.name);
		} else {
			logout(false);
		}
		// login(user?.name);

		navigate("/", {
			replace: true,
		});
	};
	// const onLogout = () => {
	// 	login(user?.name);

	// 	navigate("/", {
	// 		replace: true,
	// 	});
	// };

	return (
		<>
			<div className="flex justify-end mt-16 container mx-auto space-x-4">
				<h1 className="text-base font-bold">{user?.name}</h1>
				<button>
					<img
						className="h-9 w-9 rounded-full"
						src={imagen}
						alt="imagen usuario"
						title="Login"
					/>
				</button>

				<button
					onClick={() => navigate("/")}
					// onClick={() => navigate(-1)}
					type="button"
					className="bg-blue-800 text-white px-6 py-2 hover:bg-blue-600 transition-colors font-semibold rounded-md text-base"
				>
					Volver
				</button>
			</div>

			<div className="container mx-auto mt-2">
				<h1>Login </h1>

				<hr className="max-w-4xl my-3" />

				<button
					onClick={onLogin}
					// onClick={() => navigate(-1)}
					type="button"
					className="bg-blue-800 text-white px-6 py-2 hover:bg-blue-600 transition-colors font-semibold rounded-md text-base mt-2"
				>
					Login
				</button>
			</div>
		</>
	);
};
