import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import Icons from "./Icons";

function Footer({ setValue }: { setValue: (value: string) => void }) {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<footer className="footer">
			{/* Iconos de contacto */}
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					marginBottom: 2,
					padding: { xs: "0 16px", sm: "0" },
				}}
			>
				<Icons size={isMobile ? 16 : 18} setValue={setValue} />
			</Box>

			<Typography
				variant="h6"
				color="white.dark"
				align="center"
				sx={{
					fontSize: { xs: "14px", sm: "16px" },
					padding: { xs: "0 16px", sm: "0" },
				}}
			>
				{"Copyright © "}
				<Link
					to="/about-me"
					onClick={() => setValue("aboutMe")}
					style={{ textDecoration: "none" }}
				>
					<Box
						component="span"
						sx={{ color: "white.light", fontWeight: "bold" }}
					>
						Cristian Duran
					</Box>
				</Link>{" "}
				{new Date().getFullYear()}
				{"."}
			</Typography>
		</footer>
	);
}

export default Footer;
