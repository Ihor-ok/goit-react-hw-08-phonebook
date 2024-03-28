

import { Navigation } from 'components/Navigation/Navigation';
import css from './AppBar.module.css';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const AppBar = () => {
  

  return (
    <header className={css.header}>
        <Navigation />
        <UserMenu />
        <AuthNav />
    </header>
  );
};
