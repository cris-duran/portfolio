import { AppBar, Toolbar, Tabs, Tab } from '@mui/material';
import { useState } from 'react';
import { styles } from '@constants/styles';

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
                <Tab value="home" label="Inicio" />
                <Tab value="about" label="Sobre mi" />
                <Tab value="projects" label="Proyectos" />
                <Tab value="experience" label="Experiencia" />
                <Tab value="contact" label="Contacto" />
            </Tabs>
        </Toolbar>
    </AppBar>
    </>
  )
}

export default Header
