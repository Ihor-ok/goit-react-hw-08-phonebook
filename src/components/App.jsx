import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router";
import { Layout } from "./Layout";
import { useDispatch } from "react-redux";
import { useAuth } from "./hooks";
import { refreshUser } from "./redux/auth/operations";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";


const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));


export const App = () => {

     const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);


    return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
        <>
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
                     <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
                }
                />
                </Route>
        </Routes>
        </>
    )

    
    
    
   
    

};