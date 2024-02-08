import { useState } from "react";

export const useFormulario = (valorInicial = {}) => {
	const [formState, setformState] =
		useState(valorInicial);

	const onInputChange = ({ target }) => {
		const { name, value } = target;
		setformState({
			...formState,
			[name]: value,
		});
	};

	const onResetForm = () => {
		setformState(valorInicial);
	};

	// La valor del form formState, y la función para cambiarlo onInputChange
	return {
		...formState,
		formState,
		onInputChange,
		onResetForm,
		setformState,
	};
};
