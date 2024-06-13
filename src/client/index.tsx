import { useEffect } from 'react';
import './styles/main.scss';
import { Header } from './components/Header';
import MainPage from '@pages/mainPage';

export const Main = () => {
  return (
    <>
      <Header />
      <MainPage />
    </>
  );
};
