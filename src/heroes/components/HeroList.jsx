import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
	const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

	return (
		<>
			<div className="grid md:grid-cols-3 gap-3 text-base">
				{heroes.map((hero) => (
					<HeroCard key={hero.id} {...hero} />
					// <HeroCard key={hero.id} hero={hero} />
				))}
			</div>
		</>
	);
};
