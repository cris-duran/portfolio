import { routes } from "@constants/routes";
import { Route, Routes } from "react-router-dom";

function Main() {
	return (
		<main>
			<Routes>
				{routes.map((route) => (
					<Route
						key={route.value}
						path={route.path}
						element={<route.component />}
					/>
				))}
			</Routes>
		</main>
	);
}

export default Main;
