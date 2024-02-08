import { HeroList } from "../components";

export const DcPage = () => {
	return (
		<>
			<div className="space-y-2 mb-4">
				<h1>DC Comics</h1>
				<hr />
			</div>
			<HeroList publisher="DC Comics" />
		</>
	);
};
