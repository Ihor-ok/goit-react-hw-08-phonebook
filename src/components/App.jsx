import { lazy, useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { Layout } from "./Layout";
import { useDispatch } from "react-redux";
import { useAuth } from "./hooks";
import { refreshUser } from "./redux/auth/operations";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import css from "./App.module.css";
import { useLocation } from 'react-router-dom';
import backgroundImage2 from '../img/pexels-cottonbro-studio-4065906.jpg'; // Шлях до зображення 1
import backgroundImage1 from '../img/pexels-george-dolgikh-1310534.jpg'; // Шлях до зображення 2



const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));


export const App = () => {

  const [background, setBackground] = useState(backgroundImage1);
  const location = useLocation();
  
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
     
  useEffect(() => {
    // Отримуємо шлях з адресного рядка та на його основі встановлюємо бекграунд
       const pathname = location.pathname;
       console.log(pathname);
    if (pathname === '/') {
      setBackground(backgroundImage1);
    } 
     else {
      setBackground(backgroundImage2);
    }
  }, [location.pathname]); // Викликаємо useEffect при зміні шляху


    return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
              <div style={{ backgroundImage: `url(${background})`}} className={css.app} >
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route
                    path="/register"
                    element={
                         <RestrictedRoute redirectTo="/phonebook" component={<RegisterPage />} />
                    }
                    />
                <Route
                path="/login"
                element={
                     <RestrictedRoute redirectTo="/phonebook" component={<LoginPage />} />
                }
                />
                <Route
                path="/phonebook"
                element={
                     <PrivateRoute redirectTo="/" component={<ContactsPage />} />
                }
                />
                </Route>
        </Routes>
        </div>
    )

    
    
    
   
    

};