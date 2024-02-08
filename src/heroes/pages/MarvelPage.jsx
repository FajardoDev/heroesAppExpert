import { HeroList } from "../components";

export const MarvelPage = () => {
	return (
		<>
			<div className="space-y-2 mb-4">
				<h1>Marvel Comics</h1>
				<hr />
			</div>

			<div className="mb-6">
				<HeroList publisher="Marvel Comics" />
			</div>
		</>
	);
};
