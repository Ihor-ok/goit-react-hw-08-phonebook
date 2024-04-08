import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F5F843',
      light: '#E9DB5D',
      dark: '#A29415',
      contrastText: '#0b0b0b',
    },
    contrastText: '#0b0b0b',
    contrastThreshold: 4.5,
  },
});

export const AuthNav = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavLink className={css.link} to="/register"><Button style={{ marginRight: 10 }} variant="contained">Register</Button>
        
        </NavLink>
      < NavLink className={css.link} to="/login"><Button  variant="contained">Log In</Button>
        
      </NavLink>
      </ThemeProvider>
      

    </div>
  );
};
