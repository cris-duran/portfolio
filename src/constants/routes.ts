// import About from "@views/About";
// import Contact from "@views/Contact";
import Cv from "@views/Cv";
import Certificate from "@views/Certificate";
import Home from "@views/Home";
import Projects from "@views/Projects";

export const routes = [
	{
		name: "Inicio",
		value: "home",
		path: "/",
		component: Home,
	},
	// {
	// 	name: "Sobre mi",
	// 	value: "aboutMe",
	// 	path: "/about-me",
	// 	component: About,
	// },
	{
		name: "Proyectos",
		value: "projects",
		path: "/projects",
		component: Projects,
	},
	// {
	// 	name: "Experiencia",
	// 	value: "experience",
	// 	path: "/experience",
	// 	component: Experience,
	// },
	{
		name: "Certificado de Titulo",
		value: "certificate",
		path: "/certificate",
		component: Certificate,
	},
	{
		name: "CV",
		value: "cv",
		path: "/cv",
		component: Cv,
	},
];
