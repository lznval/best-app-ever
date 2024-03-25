import './styles/main.scss';
import { Header } from './components/Layout/Header';
import { Auth } from './pages/Auth';

export const Main = () => {
  return (
    <>
      <Header />
      <Auth />
    </>
  )
}
