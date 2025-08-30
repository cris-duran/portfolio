import type { SxProps } from "@mui/material";

export const styles: { [key: string]: React.CSSProperties | SxProps } = {
	mainContainer: {
		display: "grid",
		minHeight: "100dvh",
		gridTemplateRows: "auto 1fr auto",
		margin: "0",
		padding: "0",
		boxSizing: "border-box",
		backgroundColor: "rgb(64, 52, 84)",
	},
	appBar: {
		backgroundColor: "rgb(29, 23, 39)",
		boxShadow: "none",
		borderBottom: "1px solid #e0e0e0",
	},
	tabs: {
		"& .MuiTabs-indicator": {
			backgroundColor: "turquoise.light",
			transition: "all 0.15s ease-in-out",
		},
		"& .MuiTab-root": {
			color: "white.light",
			transition: "all 0.15s ease-in-out",
			"&.Mui-selected": {
				color: "turquoise.light",
			},
		},
	},
	tab: {
		textTransform: "none",
		transition: "all 0.15s ease-in-out",
		"&:hover": {
			color: "turquoise.dark",
		},
	},
};
