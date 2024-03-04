import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { DcPage, MarvelPage, HeroPage, SearchPage } from "../pages";

export const HeroesRoutes = () => {
	return (
		<>
			<div className=" shadow-lg dark:shadow-black/50 text-base mb-6">
				<Navbar />
			</div>

			<div className="container mx-auto">
				<Routes>
					<Route path="/marvel" element={<MarvelPage />} />
					<Route path="/dc" element={<DcPage />} />

					{/* Search, hero by id */}
					<Route path="/search" element={<SearchPage />} />
					<Route path="/hero/:id" element={<HeroPage />} />

					<Route path="/" element={<Navigate to="/marvel" />} />
				</Routes>
			</div>
		</>
	);
};
