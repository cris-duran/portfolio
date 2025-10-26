import { projects } from "@constants/projects";
import { GitHub, Launch } from "@mui/icons-material";
import {
	Box,
	Button,
	Card,
	CardContent,
	CardMedia,
	Chip,
	Container,
	Typography,
} from "@mui/material";

function Projects() {
	return (
		<section className="projects">
			<title>Proyectos de Cristian Durán</title>
			<meta name="author" content="Cristian Durán"/>
			<meta name="keywords" content="Cristian, Duran, Cristian Duran, Desarrollador, Full Stack, Software Engineer, Software, Software Developer, Ingeniero, Ingeniero Civil en Computacion, Portafolio, Universidad de Chile, Proyectos, Proyecto, Proyectos de Cristian Duran"/>
			<meta name="description" content="Proyectos de Cristian Duran. Plataforma Plan Local de Déficit Cero, Ordéname Pay y Autored."/>
			<Container maxWidth="lg" sx={{ py: { xs: 2, sm: 3, md: 4 } }}>
				{/* Título principal */}
				<Box sx={{ textAlign: "center", mb: { xs: 1, sm: 2, md: 3 } }}>
					<Typography
						variant="h2"
						color="white"
						sx={{
							fontSize: { xs: "28px", sm: "36px", md: "48px" },
							fontWeight: "bold",
							mb: 2,
						}}
					>
						Mis Proyectos
					</Typography>
					<Typography
						variant="h6"
						color="white.light"
						sx={{
							fontSize: { xs: "16px", sm: "18px", md: "20px" },
							maxWidth: "600px",
							margin: "0 auto",
							opacity: 0.8,
						}}
					>
						Una muestra de los proyectos en los que he trabajado.
					</Typography>
				</Box>

				{/* Grid de proyectos */}
				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: {
							xs: "1fr",
							sm: "repeat(2, 1fr)",
							lg: "repeat(3, 1fr)",
						},
						gap: { xs: 3, sm: 4, md: 5 },
					}}
				>
					{projects.map((project) => (
						<Box key={project.id}>
							<Card
								sx={{
									height: "100%",
									display: "flex",
									flexDirection: "column",
									backgroundColor: "rgba(29, 23, 39, 0.9)",
									border: "1px solid rgba(255, 255, 255, 0.1)",
									borderRadius: "16px",
									overflow: "hidden",
									transition: "all 0.3s ease-in-out",
									"&:hover": {
										transform: "translateY(-8px)",
										boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
										borderColor: "turquoise.light",
									},
								}}
							>
								{/* Imagen del proyecto */}
								<CardMedia
									component="img"
									height="200"
									image={project.image}
									alt={`${project.title} - Proyecto desarrollado por Cristian Durán en ${project.company}`}
									sx={{
										backgroundColor: "rgba(255, 255, 255, 0.05)",
										objectFit: "cover",
									}}
								/>

								<CardContent sx={{ flexGrow: 1, p: { xs: 2, sm: 3 } }}>
									{/* Información de la empresa y período */}
									<Box sx={{ mb: 2 }}>
										<Chip
											label={project.company}
											size="small"
											sx={{
												backgroundColor: "turquoise.light",
												color: "white",
												fontWeight: "bold",
												fontSize: "11px",
												mb: 1,
											}}
										/>
										<Typography
											variant="caption"
											color="white.light"
											sx={{ display: "block", opacity: 0.7 }}
										>
											{project.period} • {project.role}
										</Typography>
									</Box>

									{/* Título del proyecto */}
									<Typography
										variant="h5"
										color="white"
										sx={{
											fontSize: { xs: "18px", sm: "20px", md: "22px" },
											fontWeight: "bold",
											mb: 2,
											lineHeight: 1.3,
										}}
									>
										{project.title}
									</Typography>

									{/* Descripción */}
									<Typography
										variant="body2"
										color="white.light"
										sx={{
											mb: 3,
											lineHeight: 1.6,
											opacity: 0.9,
										}}
									>
										{project.description}
									</Typography>

									{/* Tecnologías */}
									<Box sx={{ mb: 3 }}>
										<Typography
											variant="caption"
											color="white.light"
											sx={{ display: "block", mb: 1, opacity: 0.7 }}
										>
											Tecnologías utilizadas:
										</Typography>
										<Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
											{project.technologies.map((tech) => (
												<Chip
													key={`${project.id}-${tech}`}
													label={tech}
													size="small"
													variant="outlined"
													sx={{
														borderColor: "rgba(255, 255, 255, 0.3)",
														color: "white.light",
														fontSize: "10px",
														"&:hover": {
															borderColor: "turquoise.light",
															color: "turquoise.light",
														},
													}}
												/>
											))}
										</Box>
									</Box>

									{/* Botones de acción */}
									<Box sx={{ display: "flex", gap: 1, mt: "auto" }}>
										{project.githubUrl && (
											<Button
												variant="outlined"
												size="small"
												startIcon={<GitHub />}
												href={project.githubUrl}
												target="_blank"
												rel="noopener noreferrer"
												sx={{
													borderColor: "rgba(255, 255, 255, 0.3)",
													color: "white.light",
													"&:hover": {
														borderColor: "turquoise.light",
														color: "turquoise.light",
													},
												}}
											>
												GitHub
											</Button>
										)}
										{project.liveUrl && (
											<Button
												variant="outlined"
												size="small"
												startIcon={<Launch />}
												href={project.liveUrl}
												target="_blank"
												rel="noopener noreferrer"
												sx={{
													borderColor: "rgba(255, 255, 255, 0.3)",
													color: "white.light",
													"&:hover": {
														borderColor: "turquoise.light",
														color: "turquoise.light",
													},
												}}
											>
												Ver Demo
											</Button>
										)}
									</Box>
								</CardContent>
							</Card>
						</Box>
					))}
				</Box>
			</Container>
		</section>
	);
}

export default Projects;
