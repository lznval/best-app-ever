import './styles/main.scss';
import { Layout } from '@components/Layout';
import { SellerMainPage } from '@pages/seller';
import { UsersPage } from '@pages/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage } from '@pages/usersPages/Login';
import { RegisterPage } from '@pages/usersPages/Register';
import { HomePage } from '@pages/usersPages/Home';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { checkLoginUser } from '@redux/asyncThunks/userThunk';
import { AppDispatch } from '@redux/store';
import { FavoritesPage } from '@pages/usersPages/Favorites';

export const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(checkLoginUser());
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="seller" element={<SellerMainPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
