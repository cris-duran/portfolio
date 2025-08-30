import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Footer({ setValue }: { setValue: (value: string) => void }) {
	return (
		<footer className="footer">
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
