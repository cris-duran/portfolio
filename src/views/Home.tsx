import Logo from "@components/Logo";
import {
	Box,
	Container,
	Typography,
	useTheme,
	useMediaQuery,
} from "@mui/material";

function Home() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const isTablet = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<section className="home">
			<article className="centered">
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
						variant="h1"
						fontSize={{ xs: 24, sm: 30, md: 36 }}
						color="white"
						sx={{ marginBottom: 1 }}
					>
						CRISTIAN DURÁN
					</Typography>
					{/* Cargo */}
					<Typography
						variant="h1"
						fontSize={18}
						color="white"
						sx={{ marginBottom: 1 }}
					>
						Ingeniero Civil en Computación - Universidad de Chile
					</Typography>
					{/* Descripción */}
					<Typography
						variant="body1"
						fontSize={{ xs: 12, sm: 13, md: 14 }}
						color="white"
						sx={{
							marginBottom: 3,
							maxWidth: { xs: "100%", sm: "90%", md: "800px" },
							padding: { xs: "0 8px", sm: "0" },
						}}
					>
						Desde chico siempre me ha gustado aprender cosas nuevas y la
						tecnología se convirtió en una de mis mayores pasiones. Soy{" "}
						<span style={{ color: "yellow", fontWeight: "bold" }}>
							Ingeniero Civil en Computación
						</span>{" "}
						de la{" "}
						<span style={{ color: "yellow", fontWeight: "bold" }}>
							Universidad de Chile
						</span>
						, donde me titulé con distinción máxima, y desde entonces he estado
						ligado al desarrollo de software, sobre todo en el mundo de las
						aplicaciones web.{" "}
					</Typography>

					<Typography
						variant="body1"
						fontSize={14}
						color="white"
						sx={{ marginBottom: 3, maxWidth: "800px" }}
					>
						Mi trabajo de título lo hice en{" "}
						<span style={{ color: "orange", fontWeight: "bold" }}>
							Simplicity
						</span>
						, donde tuve el desafío de ser el único desarrollador de una
						plataforma urbano-habitacional. Me tocó hacer de todo: desde
						planificar y diseñar la base de datos hasta programar la API, la web
						y desplegar el proyecto completo en producción con{" "}
						<span style={{ color: "turquoise", fontWeight: "bold" }}>
							Postgres
						</span>
						,{" "}
						<span style={{ color: "turquoise", fontWeight: "bold" }}>
							Django REST
						</span>
						,{" "}
						<span style={{ color: "turquoise", fontWeight: "bold" }}>
							Angular
						</span>
						,{" "}
						<span style={{ color: "turquoise", fontWeight: "bold" }}>
							Docker
						</span>{" "}
						y{" "}
						<span style={{ color: "turquoise", fontWeight: "bold" }}>
							Nginx
						</span>
						. Fue una experiencia súper enriquecedora porque tuve que asumir
						todas las etapas del desarrollo de manera autónoma.
					</Typography>

					<Typography
						variant="body1"
						fontSize={14}
						color="white"
						sx={{ marginBottom: 3, maxWidth: "800px" }}
					>
						Durante la universidad también hice dos prácticas: en{" "}
						<span style={{ color: "orange", fontWeight: "bold" }}>Forcast</span>
						, donde participé en Endangered Tokens, una app Android con
						integración blockchain para gestionar capital digital (
						<span style={{ color: "turquoise", fontWeight: "bold" }}>
							Angular
						</span>
						,{" "}
						<span style={{ color: "turquoise", fontWeight: "bold" }}>
							Ionic
						</span>
						,
						<span style={{ color: "turquoise", fontWeight: "bold" }}>
							Postgres
						</span>
						). Y en{" "}
						<span style={{ color: "orange", fontWeight: "bold" }}>Utopie</span>,
						donde me tocó apoyar en la integración de IA generativa para crear
						cuentos infantiles en texto, audio e imágenes (
						<span style={{ color: "turquoise", fontWeight: "bold" }}>Vue</span>,{" "}
						<span style={{ color: "turquoise", fontWeight: "bold" }}>
							OpenAI API
						</span>
						).{" "}
					</Typography>

					<Typography
						variant="body1"
						fontSize={14}
						color="white"
						sx={{ marginBottom: 3, maxWidth: "800px" }}
					>
						Después, mi primera experiencia laboral fue en{" "}
						<span style={{ color: "orange", fontWeight: "bold" }}>Assets</span>,
						desarrollando una plataforma interna en{" "}
						<span style={{ color: "turquoise", fontWeight: "bold" }}>
							Next.js
						</span>{" "}
						para la gestión de bonos, cobros y pagos de agentes. Más adelante
						entré a{" "}
						<span style={{ color: "orange", fontWeight: "bold" }}>
							Ordéname
						</span>
						, donde trabajé en equipo dando soporte y agregando nuevas
						funcionalidades a OrdénamePay y Ordéname Cobranzas, con tecnologías
						como{" "}
						<span style={{ color: "turquoise", fontWeight: "bold" }}>
							Angular
						</span>
						,
						<span style={{ color: "turquoise", fontWeight: "bold" }}>
							Node.js
						</span>
						,{" "}
						<span style={{ color: "turquoise", fontWeight: "bold" }}>
							Postgres
						</span>{" "}
						y{" "}
						<span style={{ color: "turquoise", fontWeight: "bold" }}>
							Docker
						</span>
						.
					</Typography>

					<Typography
						variant="body1"
						fontSize={14}
						color="white"
						sx={{ marginBottom: 3, maxWidth: "800px" }}
					>
						Actualmente estoy en{" "}
						<span style={{ color: "orange", fontWeight: "bold" }}>Autored</span>
						, donde he participado en varios proyectos de software, colaborando
						con el equipo en integraciones de APIs y distintos desarrollos
						usando un stack bien variado (
						<span style={{ color: "turquoise", fontWeight: "bold" }}>
							React
						</span>
						,{" "}
						<span style={{ color: "turquoise", fontWeight: "bold" }}>
							Node.js
						</span>
						,{" "}
						<span style={{ color: "turquoise", fontWeight: "bold" }}>
							Ruby on Rails
						</span>
						,{" "}
						<span style={{ color: "turquoise", fontWeight: "bold" }}>
							Swagger
						</span>
						,{" "}
						<span style={{ color: "turquoise", fontWeight: "bold" }}>
							Postgres
						</span>
						,{" "}
						<span style={{ color: "turquoise", fontWeight: "bold" }}>
							Docker
						</span>
						,{" "}
						<span style={{ color: "turquoise", fontWeight: "bold" }}>
							SonarQube
						</span>
						,{" "}
						<span style={{ color: "turquoise", fontWeight: "bold" }}>Jira</span>
						,{" "}
						<span style={{ color: "turquoise", fontWeight: "bold" }}>
							Jenkins
						</span>
						,{" "}
						<span style={{ color: "turquoise", fontWeight: "bold" }}>n8n</span>,{" "}
						<span style={{ color: "turquoise", fontWeight: "bold" }}>
							Vault
						</span>
						,{" "}
						<span style={{ color: "turquoise", fontWeight: "bold" }}>
							Grafana
						</span>
						,{" "}
						<span style={{ color: "turquoise", fontWeight: "bold" }}>
							GitLab
						</span>
						).
					</Typography>

					<Typography
						variant="body1"
						fontSize={14}
						color="white"
						sx={{ marginBottom: 3, maxWidth: "800px" }}
					>
						En cada lugar donde he estado he tratado de aportar no solo con lo
						técnico, sino también con las ganas de aprender, compartir y crecer
						junto al equipo.{" "}
					</Typography>
				</Container>
			</article>
		</section>
	);
}

export default Home;
