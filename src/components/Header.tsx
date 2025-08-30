import { routes } from "@constants/routes";
import { styles } from "@constants/styles";
import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

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
			<Toolbar disableGutters>
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
			</Toolbar>
		</AppBar>
	);
}

export default Header;
