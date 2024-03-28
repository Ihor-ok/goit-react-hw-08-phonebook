// import { useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/operations';
// import { useAuth } from 'hooks';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  // const dispatch = useDispatch();
  // const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, igogo</p>
      <button type="button" onClick={() => console.log('Igogo')}>
        Logout
      </button>
    </div>
  );
};
