import CatalogMenu from '@components/CatalogMenu';
import styles from './Header.module.scss';
import { FC, useState } from 'react';
import { HeartIcon, OrdersIcon, CartIcon, UserIcon } from '@components/Icons';
import { Link } from 'react-router-dom';
import { Input } from '@components/UI/Input';
import { ProfileModal } from '@components/ProfileModal';

export const Header: FC = () => {
  const [isOpenProfileModal, setIsOpenProfileModal] = useState<boolean>(false);
  const openProfileModal = () => {
    setIsOpenProfileModal(!isOpenProfileModal);
  };

  return (
    <header className={styles.wrapper}>
      <Link to="/" className={styles.logo}>
        PoopMarket
      </Link>
      <div className={styles.catalog}>
        <CatalogMenu />
      </div>
      <div className={styles.search}>
        <Input id="search" placeholder="Поиск" />
      </div>
      <div className={styles.menu}>
        <HeartIcon />
        <OrdersIcon />
        <CartIcon />
      </div>
      <div className={styles.profile} onClick={openProfileModal}>
        <UserIcon />
        <ProfileModal
          isOpen={isOpenProfileModal}
        />
      </div>
    </header>
  );
};
