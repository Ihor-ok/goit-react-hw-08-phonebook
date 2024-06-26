import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ButtonAppBar } from './AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div >
      <ButtonAppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
