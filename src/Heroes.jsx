import { AuthProvider } from "./auth";
import { AppRouter } from "./router/AppRouter";

export const Heroes = () => {
	return (
		<>
			{/* <AuthProvider>  Sirve para compartir información en toda la app */}
			<AuthProvider>
				<AppRouter />
			</AuthProvider>
		</>
	);
};
