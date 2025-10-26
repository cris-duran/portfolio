import Logo from "@components/Logo";
import {
	Box,
	Container,
	Paper,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";

function Home() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const isTablet = useMediaQuery(theme.breakpoints.down("md"));
	const [visibleParagraphs, setVisibleParagraphs] = useState<Set<number>>(
		new Set(),
	);
	const paragraphRefs = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const index = parseInt(
						entry.target.getAttribute("data-index") || "0",
						10,
					);
					if (entry.isIntersecting) {
						setVisibleParagraphs((prev) => new Set([...prev, index]));
					} else {
						// Ocultar el párrafo cuando sale del viewport, excepto el primero
						if (index !== 0) {
							setVisibleParagraphs((prev) => {
								const newSet = new Set(prev);
								newSet.delete(index);
								return newSet;
							});
						}
					}
				});
			},
			{
				threshold: 0.1,
				rootMargin: "0px 0px -50px 0px",
			},
		);

		paragraphRefs.current.forEach((ref) => {
			if (ref) observer.observe(ref);
		});

		return () => observer.disconnect();
	}, []);

	const paragraphs = [
		{
			index: 1,
			text: "Desde pequeño siempre me ha gustado aprender cosas nuevas y la tecnología se convirtió en una de mis mayores pasiones. Soy un Ingeniero Civil en Computación de la Universidad de Chile, titulado con distinción máxima, y desde mi primera práctica profesional he estado ligado al desarrollo de software, sobre todo en el mundo de las aplicaciones web.",
		},
		{
			index: 2,
			text: "Mi trabajo de título lo hice en Simplicity, donde tuve el desafío de ser el único desarrollador de una plataforma urbano-habitacional. Me tocó hacer de todo: desde planificar y diseñar la base de datos hasta programar la API, la web y desplegar el proyecto completo en producción con Postgres, Django REST, Angular, Docker y Nginx. Fue una experiencia súper enriquecedora porque tuve que asumir todas las etapas del desarrollo de manera autónoma.",
		},
		{
			index: 3,
			text: "Durante la universidad también hice dos prácticas: en Forcast, donde participé en Endangered Tokens, una app Android con integración blockchain para gestionar capital digital (Angular, Ionic, Postgres). Y en Utopie, donde me tocó apoyar en la integración de IA generativa para crear cuentos infantiles en texto, audio e imágenes (Vue, OpenAI API).",
		},
		{
			index: 4,
			text: "Después, mi primera experiencia laboral fue en Assets, desarrollando una plataforma interna en Next.js para la gestión de bonos, cobros y pagos de agentes. Más adelante entré a Ordéname, donde trabajé en equipo dando soporte y agregando nuevas funcionalidades a OrdénamePay y Ordéname Backoffice, con tecnologías como Angular, Node.js, Postgres y Docker.",
		},
		{
			index: 5,
			text: "Actualmente estoy en Autored, donde he participado en varios proyectos de software, colaborando con el equipo en integraciones de APIs y distintos desarrollos usando un stack bien variado (React, Node.js, Ruby on Rails, Swagger, Postgres, Docker, SonarQube, Jira, Jenkins, n8n, Vault, Grafana, GitLab).",
		},
		{
			index: 6,
			text: "En cada lugar donde he estado he tratado de aportar no solo con lo técnico, sino también con las ganas de aprender, compartir y crecer junto al equipo.",
		},
	];

	const highlightText = (text: string) => {
		// Función simple que reemplaza texto con spans coloreados
		const highlightedText = text
			.replace(
				/(Simplicity|Forcast|Utopie|Assets|Ordéname|Autored)/g,
				'<span style="color: orange; font-weight: bold;">$1</span>',
			)
			.replace(
				/(Ingeniero Civil en Computación|Universidad de Chile)/g,
				'<span style="color: yellow; font-weight: bold;">$1</span>',
			)
			.replace(
				/(Postgres|Django REST|Angular|Docker|Nginx|Ionic|Vue|OpenAI API|Next.js|Node.js|React|Ruby on Rails|Swagger|SonarQube|Jira|Jenkins|n8n|Vault|Grafana|GitLab)/g,
				'<span style="color: turquoise; font-weight: bold;">$1</span>',
			);

		// biome-ignore lint/security/noDangerouslySetInnerHtml: not a security issue
		return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />;
	};

	return (
		<section className="home">
			<article className="centered">
				<title>Cristian Durán - Software Engineer</title>
				<meta name="author" content="Cristian Durán"/>
				<meta name="keywords" content="Cristian, Duran, Cristian Duran, Desarrollador, Full Stack, Software Engineer, Software, Software Developer, Ingeniero, Ingeniero Civil en Computacion, Portafolio, Universidad de Chile"/>
				<meta name="description" content="Portafolio de Cristian Duran, Ingeniero Civil en Computacion de la Universidad de Chile. Desarrollador de Software Full Stack."/>
				<Container
					maxWidth="lg"
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						textAlign: "center",
						padding: { xs: "0 16px", sm: "0 24px", md: "0 32px" },
					}}
				>
					{/* Imagen arriba */}
					<Box
						sx={{
							marginBottom: { xs: 2, sm: 3 },
							marginTop: { xs: 2, sm: 3 },
						}}
					>
						<Logo
							size={isMobile ? 180 : isTablet ? 220 : 255}
							isRating={true}
						/>
					</Box>

					{/* Nombre */}
					<Typography
						component="h1"
						variant="h1"
						fontSize={{ xs: 24, sm: 30, md: 36 }}
						fontWeight="bold"
						color="white"
						sx={{ marginBottom: 1 }}
					>
						CRISTIAN DURÁN
					</Typography>

					{/* Cargo */}
					<Typography
						component="h2"
						variant="h2"
						fontSize={18}
						fontWeight="bold"
						color="white"
						sx={{ marginBottom: 3 }}
					>
						Ingeniero Civil en Computación - Universidad de Chile
					</Typography>

					{/* Párrafos en rectángulos */}
					{paragraphs.map(({ text, index }) => (
						<Paper
							key={`paragraph-${index}`}
							ref={(el: HTMLDivElement | null) => {
								paragraphRefs.current[index] = el;
							}}
							data-index={index}
							elevation={3}
							sx={{
								width: "100%",
								maxWidth: "800px",
								marginBottom: 3,
								padding: { xs: 2, sm: 3 },
								backgroundColor: "rgba(255, 255, 255, 0.1)",
								backdropFilter: "blur(10px)",
								border: "1px solid rgba(255, 255, 255, 0.2)",
								borderRadius: 2,
								transform: visibleParagraphs.has(index)
									? "translateX(0)"
									: index % 2 === 0
										? "translateX(-300px)"
										: "translateX(300px)",
								opacity: visibleParagraphs.has(index) ? 1 : 0,
								transition: "all 0.8s ease-out",
								"&:hover": {
									backgroundColor: "rgba(255, 255, 255, 0.15)",
									transform: "translateY(-5px)",
									boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
								},
							}}
						>
							<Typography
								variant="body1"
								fontSize={{ xs: 14, sm: 15, md: 16 }}
								color="white"
								lineHeight={1.6}
								sx={{ textAlign: "left" }}
							>
								{highlightText(text)}
							</Typography>
						</Paper>
					))}
				</Container>
			</article>
		</section>
	);
}

export default Home;
