import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Icons from "./Icons";

function Footer({ setValue }: { setValue: (value: string) => void }) {
	return (
		<footer className="footer">
			{/* Iconos de contacto */}
			<Box sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}>
				<Icons size={12} />
			</Box>

			<Typography variant="h6" color="white.dark" align="center">
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
