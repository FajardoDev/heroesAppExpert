import { Route, Routes } from "react-router-dom";

import { HeroesRoutes } from "../heroes/routes";
import { LoginPage } from "../heroes/pages";

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path="/login" element={<LoginPage />} />

				<Route path="/*" element={<HeroesRoutes />} />
			</Routes>
		</>
	);
};
