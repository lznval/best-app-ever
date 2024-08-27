import CatalogMenu from '@components/CatalogMenu';
import styles from './Header.module.scss';
import { FC, useState } from 'react';
import { HeartIcon, OrdersIcon, CartIcon, UserIcon } from '@components/Icons';
import { Link } from 'react-router-dom';
import { Input } from '@components/UI/Input';
import { ProfileModal } from '@components/ProfileModal';
import { isAuth, logoutUser } from '@redux/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, state } from '@redux/store';
import { ERoutes } from '@types';

export const Header: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { auth } = useSelector(state);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isLogin = useSelector(isAuth);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <header className={styles.wrapper}>
      <Link to={ERoutes.MAIN} className={styles.logo}>
        PoopMarket
      </Link>
      <div className={styles.catalog}>
        <CatalogMenu />
      </div>
      <div className={styles.search}>
        <Input id="search" placeholder="Поиск" />
      </div>
      <div className={styles.menu}>
        <Link to={ERoutes.FAVORITES}>
          <HeartIcon />
        </Link>
        <OrdersIcon />
        <Link to={ERoutes.CART}>
          <CartIcon />
        </Link>
      </div>
      <div className={styles.profile}>
        <UserIcon onClick={handleOpenModal} />
        <ProfileModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          isAuthenticated={isLogin}
          userName={auth.data?.fullName}
          onLogout={handleLogout}
        />
      </div>
    </header>
  );
};
