import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

const nuevoID = `elemento-${Math.random().toString(36).substring(7)}`;

// const valorInicial = {
// 	registrado: false,
// };

const initStorage = () => {
	const user = JSON.parse(localStorage.getItem("user"));

	return {
		registrado: !!user, // Si el user existe eso va a estar en true
		user: user, // user: user Y si existe pongo el user
	};
};

export const AuthProvider = ({ children }) => {
	const [authState, dispatch] = useReducer(authReducer, {}, initStorage);

	const login = (name = "") => {
		const user = { id: nuevoID, name };

		const action = {
			type: types.login,
			payload: user,
			// payload: {id: nuevoID, name: name},
		};

		localStorage.setItem("user", JSON.stringify(user));

		dispatch(action);
	};

	const logout = () => {
		localStorage.removeItem("user");
		const action = {
			type: types.logout,
			registrado: false,
		};

		dispatch(action);
	};

	return (
		<>
			<AuthContext.Provider
				value={{ ...authState, login, logout }} // ó authState
			>
				{children}
			</AuthContext.Provider>
		</>
	);
};
