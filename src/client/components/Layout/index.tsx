import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="layout flex flex-col min-h-screen">
      <Header customStyle="layout-header" />
      <main className="layout-main flex-grow">
        <Outlet />
      </main>
      <Footer customStyle="layout-footer" />
    </div>
  );
};
