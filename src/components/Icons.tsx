import cvIcon from "@assets/cv-square.svg";
import emailIcon from "@assets/email.svg";
import githubIcon from "@assets/github.svg";
import linkedinIcon from "@assets/linkedin.svg";
import whatsappIcon from "@assets/whatsapp.svg";
import { Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";

function Icons({
	size = 24,
	setValue,
}: {
	size?: number;
	setValue?: (value: string) => void;
}) {
	const sizePx = `${size}px`;

	const buttonStyle = {
		transition: "all 0.3s ease-in-out",
		"&:hover": {
			transform: "scale(1.1)",
			"& img": {
				filter:
					"brightness(0) saturate(100%) invert(84%) sepia(31%) saturate(638%) hue-rotate(160deg) brightness(103%) contrast(101%)",
			},
		},
	};

	return (
		<ButtonGroup
			sx={{
				"& .MuiButton-root": {
					padding: { xs: "4px", sm: "8px" },
					minWidth: { xs: "32px", sm: "40px" },
				},
			}}
		>
			<Button
				variant="text"
				sx={buttonStyle}
				component={Link}
				to="https://www.linkedin.com/in/cris-duran/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					src={linkedinIcon}
					alt="LinkedIn"
					style={{
						width: sizePx,
						height: sizePx,
						filter: "invert(1)", // Para que el icono sea blanco
						transition: "filter 0.3s ease-in-out",
					}}
				/>
			</Button>
			<Button
				variant="text"
				sx={buttonStyle}
				component={Link}
				to="https://github.com/cris-duran"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					src={githubIcon}
					alt="GitHub"
					style={{
						width: sizePx,
						height: sizePx,
						filter: "invert(1)", // Para que el icono sea blanco
						transition: "filter 0.3s ease-in-out",
					}}
				/>
			</Button>
			<Button
				variant="text"
				sx={buttonStyle}
				component={Link}
				to="/cv"
				onClick={() => setValue && setValue("cv")}
			>
				<img
					src={cvIcon}
					alt="CV"
					style={{
						width: sizePx,
						height: sizePx,
						filter: "invert(1)", // Para que el icono sea blanco
						transition: "filter 0.3s ease-in-out",
					}}
				/>
			</Button>
			<Button
				variant="text"
				sx={buttonStyle}
				component={Link}
				to="mailto:info@cduran.cl"
			>
				<img
					src={emailIcon}
					alt="Email"
					style={{
						width: sizePx,
						height: sizePx,
						filter: "invert(1)", // Para que el icono sea blanco
						transition: "filter 0.3s ease-in-out",
					}}
				/>
			</Button>
			<Button
				variant="text"
				sx={buttonStyle}
				component={Link}
				to="https://wa.me/56932106131"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					src={whatsappIcon}
					alt="WhatsApp"
					style={{
						width: sizePx,
						height: sizePx,
						filter: "invert(1)", // Para que el icono sea blanco
						transition: "filter 0.3s ease-in-out",
					}}
				/>
			</Button>
		</ButtonGroup>
	);
}

export default Icons;
