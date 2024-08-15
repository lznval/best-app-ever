import './styles/main.scss';
import { Layout } from '@components/Layout';
import { SellerMainPage } from '@pages/seller';
import { UsersPage } from '@pages/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage } from '@pages/usersPages/Login';
import { RegisterPage } from '@pages/usersPages/Register';
import { HomePage } from '@pages/usersPages/Home';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='users' element={<UsersPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path="seller" element={<SellerMainPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
