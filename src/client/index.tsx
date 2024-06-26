import './styles/main.scss';
import { Layout } from '@components/Layout';
import { SellerMainPage } from '@pages/seller';
import { UsersPage } from '@pages/users';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<UsersPage />} />
          <Route path="seller" element={<SellerMainPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
