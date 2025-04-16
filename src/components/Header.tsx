import { AppBar, Toolbar, Tabs, Tab } from '@mui/material';
import { styles } from '@constants/styles';
import { Link } from 'react-router-dom';
import { routes } from '@constants/routes';

function Header({ value, setValue }: { value: string, setValue: (value: string) => void }) {

    const handleChange = (_: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
  
    return (
        <AppBar className="header" position="sticky" sx={styles.appBar}>
            <Toolbar disableGutters >
                <Tabs 
                    value={value} 
                    onChange={handleChange}
                    sx={styles.tabs}
                    centered 
                    aria-label="Selector de paginas"
                >
                    {routes.map((route) => (
                        <Tab key={route.name} value={route.value} label={route.name} component={Link} to={route.path} sx={styles.tab} disableRipple/>
                    ))}
                </Tabs>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
