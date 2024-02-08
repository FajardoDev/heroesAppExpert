import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

const valorInicial = {
	registrado: false,
};

export const AuthProvider = ({ children }) => {
	const [state, dispatch] = useReducer(
		authReducer,
		valorInicial,
	);

	return (
		<>
			<AuthContext.Provider value={{}}>
				{children}
			</AuthContext.Provider>
		</>
	);
};
