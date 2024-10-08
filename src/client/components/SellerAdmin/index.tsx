import { isSellerAuth, logoutSeller } from '@redux/slices/sellerSlice';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RegisterTabForm } from './components/RegisterTabForm';
import { AuthTabForm } from './components/AuthTabForm';
import { Link } from 'react-router-dom';
import { Button } from '@components/UI/Button';
import { AppDispatch, state } from '@redux/store';
import { ProductCard } from '@components/ProductCard';
import { ERoutesSeller } from 'client/utils/constants';

const AuthTabs = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

  const handleTabClick = (tab: 'login' | 'register') => {
    setActiveTab(tab);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <div className="flex justify-around mb-4">
        <button
          onClick={() => handleTabClick('login')}
          className={`py-2 px-4 rounded-t-lg transition-colors ${
            activeTab === 'login' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
          }`}
        >
          Авторизация
        </button>
        <button
          onClick={() => handleTabClick('register')}
          className={`py-2 px-4 rounded-t-lg transition-colors ${
            activeTab === 'register' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
          }`}
        >
          Регистрация
        </button>
      </div>
      <div className="p-4 border rounded-b-lg">
        {activeTab === 'login' ? (
          <div>
            <AuthTabForm />
          </div>
        ) : (
          <div>
            <RegisterTabForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthTabs;

export const SellerAdmin = () => {
  const auth = useSelector(isSellerAuth);
  const dispatch = useDispatch<AppDispatch>();
  const {
    products: { data },
    seller,
  } = useSelector(state);

  const sellersProducts = useMemo(() => {
    const result = data.filter((item) => item.seller._id === seller.data?._id);
    return result;
  }, [data, seller]);

  const handleLogout = () => {
    dispatch(logoutSeller());
  };
  if (!auth) {
    return <AuthTabs />;
  }

  return (
    <>
      <Link to={ERoutesSeller.CREATE}>
        <Button label="На страницу создания товара" />
      </Link>
      <Button onClick={handleLogout} label="Выйти" />
      <br />
      <br />
      <br />
      <h1>Товары, которые вы сейчас продаёте</h1>
      <br />
      <br />
      <br />
      {sellersProducts.map((item) => (
        <ProductCard key={item._id} product={item} />
      ))}
    </>
  );
};
