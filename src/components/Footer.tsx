import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Footer({ setValue }: { setValue: (value: string) => void }) {

  return (
    <footer>
        <Typography variant="h6" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" to="/about-me" onClick={() => setValue('aboutMe')}>
                Cristian Duran
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    </footer>
  )
}

export default Footer;
