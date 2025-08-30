import { Box } from "@mui/material";

function CV() {
	return (
		<Box className="centered" style={{ marginTop: 10, height: "80dvh" }}>
			<iframe
				src="/public/cv.pdf" // Asegúrate que la ruta sea correcta en la carpeta public
				width="80%"
				height="100%"
				title="Curriculum Vitae"
			></iframe>
		</Box>
	);
}

export default CV;
