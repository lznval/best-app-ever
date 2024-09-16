import CatalogMenu from '@components/CatalogMenu';
import styles from './Header.module.scss';
import { FC, useMemo, useState } from 'react';
import { HeartIcon, OrdersIcon, CartIcon, UserIcon } from '@components/Icons';
import { Link } from 'react-router-dom';
import { Input } from '@components/UI/Input';
import { ProfileModal } from '@components/ProfileModal';
import { isAuth, logoutUser } from '@redux/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, state } from '@redux/store';
import cn from 'classnames';
import { ERoutes } from 'client/utils/constants';

interface IHeaderProps {
  customStyle: string;
}

export const Header: FC<IHeaderProps> = ({ customStyle }) => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    auth,
    cart: { items },
  } = useSelector(state);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isLogin = useSelector(isAuth);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const countItemsCart = useMemo(() => {
    return items.reduce((acc, current) => acc + current.quantity, 0);
  }, [items]);

  return (
    <header className={cn(customStyle, styles.wrapper)}>
      <Link to={ERoutes.MAIN} className={styles.logo}>
        PoopMarket
      </Link>
      <div className={styles.catalog}>
        <CatalogMenu />
      </div>
      <div className={styles.catalog}>
        <Link to={ERoutes.PRODUCTS}>Все товары</Link>
      </div>
      <div className={styles.search}>
        <Input id="search" placeholder="Поиск" />
      </div>
      <div className={styles.menu}>
        <Link to={ERoutes.FAVORITES}>
          <HeartIcon />
        </Link>
        <OrdersIcon />
        <Link to={ERoutes.CART} className="relative">
          {items.length > 0 && (
            <div className="flex items-center justify-center border absolute bg-white rounded-xl size-5 -right-3 -top-3 text-sm">
              {countItemsCart}
            </div>
          )}
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
