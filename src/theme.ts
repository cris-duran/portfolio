import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
	interface Palette {
		turquoise: {
			main: string;
			light: string;
			dark: string;
		};
		white: {
			main: string;
			light: string;
			dark: string;
		};
		black: {
			main: string;
			light: string;
			dark: string;
		};
		orange: {
			main: string;
			light: string;
			dark: string;
		};
		yellow: {
			main: string;
			light: string;
			dark: string;
		};
	}
	interface PaletteOptions {
		turquoise?: {
			main: string;
			light: string;
			dark: string;
		};
		white?: {
			main: string;
			light: string;
			dark: string;
		};
		black?: {
			main: string;
			light: string;
			dark: string;
		};
		orange?: {
			main: string;
			light: string;
			dark: string;
		};
		yellow?: {
			main: string;
			light: string;
			dark: string;
		};
	}
}

const theme = createTheme({
	palette: {
		primary: {
			main: "#1D1727", // Un color púrpura oscuro
			light: "#2A2138",
			dark: "#15101D",
		},
		secondary: {
			main: "#FF6B6B", // Un color coral
			light: "#FF8E8E",
			dark: "#E64A4A",
		},
		turquoise: {
			main: "#4ECDC4", // Un color turquesa
			light: "#6EDDD5",
			dark: "#3EBDB4",
		},
		orange: {
			main: "#FF6B6B",
			light: "#FF8E8E",
			dark: "#E64A4A",
		},
		yellow: {
			main: "#FFD700",
			light: "#FFD700",
			dark: "#FFD700",
		},
		white: {
			main: "#FFFFFF",
			light: "#FFFFFF",
			dark: "#F5F5F5",
		},
		black: {
			main: "#000000",
			light: "#333333",
			dark: "#000000",
		},
	},
});

export default theme;
