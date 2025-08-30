import { routes } from "@constants/routes";
import { styles } from "@constants/styles";
import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Icons from "./Icons";
import Logo from "./Logo";

function Header({
	value,
	setValue,
}: {
	value: string;
	setValue: (value: string) => void;
}) {
	const handleChange = (_: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	return (
		<AppBar className="header centered" position="sticky" sx={styles.appBar}>
			<Toolbar
				disableGutters
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					width: "100%",
				}}
			>
				{/* Logo y nombre a la izquierda */}
				<Box
					sx={{ display: "flex", alignItems: "center", gap: 1, marginLeft: 2 }}
				>
					<Logo size={40} />
					<Typography
						variant="h6"
						color="white"
						sx={{
							fontSize: "14px",
						}}
					>
						Cristian Durán
					</Typography>
				</Box>

				{/* Tabs centradas */}
				<Tabs
					value={value}
					onChange={handleChange}
					sx={styles.tabs}
					centered
					aria-label="Selector de paginas"
				>
					{routes.map((route) => (
						<Tab
							key={route.name}
							value={route.value}
							label={route.name}
							component={Link}
							to={route.path}
							sx={styles.tab}
							disableRipple
						/>
					))}
				</Tabs>

				{/* Iconos a la derecha */}
				<Box sx={{ width: "20%", display: "flex", justifyContent: "flex-end" }}>
					<Icons size={18} setValue={setValue} />
				</Box>
			</Toolbar>
		</AppBar>
	);
}

export default Header;
