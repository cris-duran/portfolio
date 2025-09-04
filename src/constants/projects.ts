export interface Project {
	id: number;
	title: string;
	description: string;
	technologies: string[];
	image: string;
	githubUrl?: string;
	liveUrl?: string;
	company: string;
	period: string;
	role: string;
}

export const projects: Project[] = [
	{
		id: 1,
		title: "Plataforma Plan Local de Déficit Cero",
		description:
			"Desarrollo completo de una plataforma para la visualización de datos habitacionales georeferenciados. Incluye planificación, diseño y desarrollo de base de datos, API, frontend y despliegue en producción.",
		technologies: [
			"Django REST",
			"Angular",
			"PostgreSQL",
			"Docker",
			"Nginx",
			"Mapbox",
		],
		image: "/plan-local.jpeg", // Puedes agregar imágenes reales de tus proyectos
		liveUrl: "https://planlocaldeficitcero.cl",
		company: "Simplicity",
		period: "Feb 2024 - Presente",
		role: "Full Stack Developer",
	},
	{
		id: 2,
		title: "Autored",
		description:
			"Desarrollo y colaboración con el equipo de autored en múltiples proyectos de software. Integraciones de APIs, revisiones de código, monitoreo de proyectos y soporte técnico.",
		technologies: [
			"React",
			"Node.js",
			"Ruby on Rails",
			"Swagger",
			"PostgreSQL",
			"Docker",
			"SonarQube",
			"Grafana",
			"GitLab",
			"Jenkins",
			"Vault",
			"n8n",
			"Jira",
		],
		image: "/autored.jpeg",
		liveUrl: "https://autored.cl",
		company: "Autored",
		period: "Feb 2025 - Presente",
		role: "Full Stack Developer",
	},
	{
		id: 3,
		title: "Ordéname Pay y Ordéname Backoffice",
		description:
			"Desarrollo de nuevas funcionalidades y soporte técnico para Ordéname Pay, Ordéname Backoffice y Cobranza Web.",
		technologies: [
			"Angular",
			"Node.js",
			"PostgreSQL",
			"Github",
			"Docker",
			"ERP",
		],
		image: "/ordename.jpeg",
		liveUrl: "https://ordename.cl",
		company: "Ordéname",
		period: "Ago 2024 - Abr 2025",
		role: "Software Engineer Junior",
	},
];
