import { types } from "../types/types";

// const valorInicial = {
// 	registrado: false,

// };

export const authReducer = (state = {}, action) => {
	switch (action.type) {
		case types.login:
			return {
				...state,
				registrado: true,
				name: action.payload,
			};

		case types.logout:
			return {
				registrado: false,
			};

		default:
			state;
	}
};
// logout => Cerrar sesión
// login => Acceso
