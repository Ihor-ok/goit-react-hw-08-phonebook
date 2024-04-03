import { useDispatch } from 'react-redux';
import css from './UserMenu.module.css';
import { useAuth } from 'components/hooks';
import { logOut } from 'components/redux/auth/operations';



export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();




  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button className={css.button} type="button" onClick={() => {
      
        dispatch(logOut())
      }}>
        Logout
      </button>
    </div>
  );
};
