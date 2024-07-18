import CatalogMenu from '@components/CatalogMenu';
import styles from './Header.module.scss';
import { FC, useState } from 'react';
import { HeartIcon, OrdersIcon, CartIcon, UserIcon } from '@components/Icons';
import { Link } from 'react-router-dom';
import { Input } from '@components/UI/Input';
import { UserModal } from '@components/UserModal';
import { ProfileModal } from '@components/ProfileModal';

export const Header: FC = () => {
  const [isOpenProfileModal, setIsOpenProfileModal] = useState<boolean>(false);
  const [isOpenUserModal, setIsOpenUserModal] = useState<boolean>(false);
  const [type, setType] = useState<string>('auth');

  const openProfileModal = () => {
    setIsOpenProfileModal(!isOpenProfileModal);
  };

  const closeProfileModal = () => {
    setIsOpenProfileModal(false);
  };

  const openUserModal = (value: string) => {
    setIsOpenUserModal(true);
    setType(value);
  };

  const closeUserModal = () => {
    setIsOpenUserModal(false);
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
          openUserModal={openUserModal}
        />
      </div>
      <UserModal
        isOpen={isOpenUserModal}
        closeModal={closeUserModal}
        type={type}
      />
    </header>
  );
};
