import cristianLogo from "@assets/cristian.png";
import {
	Button,
	ButtonGroup,
	Card,
	CardContent,
	CardMedia,
	Container,
	Rating,
	Typography,
} from "@mui/material";

function Home({
	count,
	setCount,
}: {
	count: number;
	setCount: (count: number) => void;
}) {
	return (
		<section className="home">
			<article className="centered">
				<Container
					maxWidth="lg"
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						textAlign: "center",
					}}
				>
					{/* Imagen arriba */}
					<Card
						variant="outlined"
						sx={{
							backgroundColor: "rgb(29, 23, 39)",
							maxWidth: 255,
							position: "relative",
							marginBottom: 3,
							marginTop: 3,
							borderRadius: "100%",
							boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
							overflow: "hidden",
							transition: "transform 0.3s ease-in-out",
							"&:hover": {
								transform: "scale(1.05)",
							},
						}}
					>
						<CardMedia
							component="img"
							image={cristianLogo}
							title="Cristian Duran Avatar"
							sx={{
								borderRadius: "100%",
								backgroundColor: "white",
								padding: "1px",
								width: "100%",
								margin: "auto",
							}}
						/>
						<CardContent
							sx={{
								backgroundColor: "rgba(29, 23, 39, 0.8)",
								position: "absolute",
								bottom: 0,
								left: 0,
								right: 0,
								textAlign: "center",
								padding: "8px",
							}}
						>
							<Rating
								name="half-rating-read"
								defaultValue={5}
								precision={0.5}
								readOnly
								sx={{
									"& .MuiRating-iconFilled": {
										color: "#FFD700",
									},
									"& .MuiRating-iconEmpty": {
										color: "#666",
									},
								}}
							/>
						</CardContent>
					</Card>

					{/* Nombre */}
					<Typography
						variant="h1"
						fontSize={36}
						color="white"
						sx={{ marginBottom: 1 }}
					>
						CRISTIAN DURAN
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
						fontSize={14}
						color="white"
						sx={{ marginBottom: 3, maxWidth: "800px" }}
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
						Mi última experiencia fue en{" "}
						<span style={{ color: "orange", fontWeight: "bold" }}>Autored</span>
						, donde participé en varios proyectos de software, colaborando con
						el equipo en integraciones de APIs y distintos desarrollos usando un
						stack bien variado (
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

					{/* Botones */}
					<ButtonGroup sx={{ marginBottom: 3 }}>
						<Button variant="outlined" color="secondary">
							<Typography variant="h6" fontSize={24} color="white">
								Linkedin
							</Typography>
						</Button>
						<Button variant="outlined" color="secondary">
							<Typography variant="h6" fontSize={24} color="white">
								Github
							</Typography>
						</Button>
					</ButtonGroup>

					<div className="card">
						<button type="button" onClick={() => setCount(count + 1)}>
							count is {count}
						</button>
						<p>Development by Cristian Duran</p>
					</div>
					<p className="read-the-docs">
						Click on the Cristian Duran logo to learn more
					</p>
				</Container>
			</article>
		</section>
	);
}

export default Home;
