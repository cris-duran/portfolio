import { Box } from "@mui/material";

function CV() {
	return (
		<section>
			<article>
				<title>Curriculum Vitae de Cristian Durán</title>
				<meta name="author" content="Cristian Durán"/>
				<meta name="keywords" content="Cristian, Duran, Cristian Duran, Desarrollador, Full Stack, Software Engineer, Software, Software Developer, Ingeniero, Ingeniero Civil en Computacion, Portafolio, Universidad de Chile, Proyectos, Proyecto, Proyectos de Cristian Duran"/>
				<meta name="description" content="Curriculum Vitae de Cristian Duran, Ingeniero Civil en Computacion de la Universidad de Chile."/>
				<Box className="centered" style={{ marginTop: 10, height: "80dvh" }}>
					<iframe
						src="/cv.pdf" // Asegúrate que la ruta sea correcta en la carpeta public
						width="90%"
						height="100%"
						title="Curriculum Vitae"
					></iframe>
				</Box>
			</article>
		</section>
	);
}

export default CV;
