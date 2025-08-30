import { routes } from "@constants/routes";
import { styles } from "@constants/styles";
import {
	AppBar,
	Box,
	Tab,
	Tabs,
	Toolbar,
	Typography,
	useTheme,
	useMediaQuery,
} from "@mui/material";
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
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
					padding: { xs: "0 16px", sm: "0 24px" },
				}}
			>
				{/* Logo y nombre a la izquierda */}
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						gap: 1,
						marginLeft: { xs: 0, sm: 2 },
					}}
				>
					<Logo size={isMobile ? 32 : 40} />
					<Typography
						variant="h6"
						color="white"
						sx={{
							fontSize: { xs: "12px", sm: "14px" },
							display: { xs: "none", sm: "block" },
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
				<Box
					sx={{
						width: { xs: "auto", sm: "20%" },
						display: "flex",
						justifyContent: "flex-end",
					}}
				>
					<Icons size={isMobile ? 16 : 18} setValue={setValue} />
				</Box>
			</Toolbar>
		</AppBar>
	);
}

export default Header;
