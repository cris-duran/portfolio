import { CssBaseline, ThemeProvider } from "@mui/material";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import theme from "./theme";

const rootElement = document.getElementById("root");
if (!rootElement) {
	throw new Error("Root element not found");
}

const app = (
	<BrowserRouter>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<App />
		</ThemeProvider>
	</BrowserRouter>
);

// Verificar si hay contenido pre-renderizado (SSR)
if (rootElement.hasChildNodes()) {
	// Hidratar el contenido existente
	hydrateRoot(rootElement, app);
} else {
	// Renderizar desde cero
	createRoot(rootElement).render(app);
}
