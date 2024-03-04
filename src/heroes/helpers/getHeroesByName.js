// Función para mostrar los heroes filtrados

import { heroes } from "../data/heroes";

export const getHeroesByName = (name = "") => {
	name = name.toLocaleLowerCase().trim();
	if (name.length === 0) return [];

	return heroes.filter(
		(hero) =>
			hero.superhero.toLocaleLowerCase().includes(name) ||
			hero.characters.toLocaleLowerCase().includes(name),
	);
};
