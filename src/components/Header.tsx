import { AppBar, Toolbar, Tabs, Tab } from '@mui/material';
import { useState } from 'react';
import { styles } from '@constants/styles';
import { Link } from 'react-router-dom';

function Header() {
    const [value, setValue] = useState('home');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

  return (
    <>
    <AppBar position="sticky" sx={styles.appBar}>
        <Toolbar disableGutters >
            <Tabs 
                value={value} 
                onChange={handleChange}
                sx={styles.tabs}
                centered 
                aria-label="Selector de secciones"
            >
                <Tab value="home" label="Inicio" component={Link} to="/" />
                <Tab value="about" label="Sobre mi" component={Link} to="/about" />
                <Tab value="projects" label="Proyectos" component={Link} to="/projects" />
                <Tab value="experience" label="Experiencia" component={Link} to="/experience" />
                <Tab value="contact" label="Contacto" component={Link} to="/contact" />
            </Tabs>
        </Toolbar>
    </AppBar>
    </>
  )
}

export default Header
