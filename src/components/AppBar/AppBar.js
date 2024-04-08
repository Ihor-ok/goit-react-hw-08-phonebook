

import { Navigation } from 'components/Navigation/Navigation';
import css from './AppBar.module.css';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'components/hooks';


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F5F843',
      light: '#E9DB5D',
      dark: '#A29415',
      contrastText: '#fff',
    },
    contrastText: '#0b0b0b',
    contrastThreshold: 4.5,
  },
});


export const ButtonAppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className={css.appBar}>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Navigation />
              </Typography>
              {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </Toolbar>
          </AppBar>
    </Box>
      </ThemeProvider>
      

    </div>
     

    // <header className={css.header}>
    //   <Navigation />
    //   {isLoggedIn ? <UserMenu /> : <AuthNav />}
    // </header>
  );
};
