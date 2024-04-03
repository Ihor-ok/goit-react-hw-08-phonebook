import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import Button from '@mui/material/Button';

export const AuthNav = () => {
  return (
    <div>
      <Button style={{ marginRight: 10 }} variant="contained"><NavLink className={css.link} to="/register">
        Register
      </NavLink></Button>
      <Button  variant="contained"><NavLink className={css.link} to="/login">
        Log In
      </NavLink></Button>

    </div>
  );
};
