import './styles/main.scss';
import { Layout } from '@components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage } from '@pages/usersPages/Login';
import { RegisterPage } from '@pages/usersPages/Register';
import { HomePage } from '@pages/usersPages/Home';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { checkLoginUser } from '@redux/asyncThunks/userThunk';
import { AppDispatch } from '@redux/store';
import { FavoritesPage } from '@pages/usersPages/Favorites';
import { CartPage } from '@pages/usersPages/Cart';
import { ProductsPage } from '@pages/usersPages/Products';
import { ProductDetailPage } from '@pages/usersPages/ProductDetail';
import { ERoutes, ERoutesSeller } from '@types';
import { SellerMainPage } from '@pages/seller/SellerMain';
import { CreateProductPage } from '@pages/seller/CreateProduct';
import { checkLoginSeller } from '@redux/asyncThunks/sellerThunk';

export const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(checkLoginUser());
    dispatch(checkLoginSeller());
  }, []);
  return (
    <Router>
      <Routes>
        <Route path={ERoutes.MAIN} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={ERoutes.LOGIN} element={<LoginPage />} />
          <Route path={ERoutes.REGISTER} element={<RegisterPage />} />
          <Route path={ERoutes.FAVORITES} element={<FavoritesPage />} />
          <Route path={ERoutes.CART} element={<CartPage />} />
          <Route path={ERoutes.PRODUCTS} element={<ProductsPage />} />
          <Route
            path={ERoutes.PRODUCT_DETAIL}
            element={<ProductDetailPage />}
          />
          //Дальше страница для продавца
          <Route path={ERoutesSeller.MAIN} element={<SellerMainPage />} />
          <Route path={ERoutesSeller.CREATE} element={<CreateProductPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
