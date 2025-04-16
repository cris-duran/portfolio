import Home from "@views/Home";
import About from "@views/About";
import Projects from "@views/Projects";
import Experience from "@views/Experience";
import Contact from "@views/Contact";

export const routes = [
    {
        name: 'Inicio',
        value: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'Sobre mi',
        value: 'aboutMe',
        path: '/about-me',
        component: About
    },
    {
        name: 'Proyectos',
        value: 'projects',
        path: '/projects',
        component: Projects
    },
    {
        name: 'Experiencia',
        value: 'experience',
        path: '/experience',
        component: Experience
    },
    {
        name: 'Contacto',
        value: 'contact',
        path: '/contact',
        component: Contact
    }
]