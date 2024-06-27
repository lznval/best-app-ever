import CatalogMenu from '@components/CatalogMenu';
import styles from './Header.module.scss';
import { FC, useRef, useState } from 'react';
import { HeartIcon, OrdersIcon, CartIcon, UserIcon } from '@components/Icons';
import { Link } from 'react-router-dom';
import { Input } from '@components/UI/Input';
import { ModalAuth } from '@components/ModalAuth';
import { ModalUser } from '@components/ModalUser';

export const Header: FC = () => {
  const [isOpenProfileModal, setIsOpenProfileModal] = useState<boolean>(false);
  const profileModalRef = useRef<HTMLDivElement>(null);

  const handleProfileModal = () => {
    setIsOpenProfileModal(!isOpenProfileModal);
  };

  const closeProfileModal = () => {
    setIsOpenProfileModal(false);
  };

  const [showModal, setShowModal] = useState<boolean>(false);
  const handleModalAuth = () => {
    setShowModal(!showModal);
  };

  interface IProfileModal {
    handleModalAuth: () => void;
  }

  const ProfileModal: FC<IProfileModal> = ({ handleModalAuth }) => {
    return (
      <div className={styles.profileModal}>
        <h1 onClick={closeProfileModal}>X</h1>
        <p onClick={handleModalAuth}>Авторизоваться</p>
        <p>Регистрация</p>
      </div>
    );
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
      <div
        className={styles.profile}
        ref={profileModalRef}
        onClick={handleProfileModal}
      >
        <UserIcon />
        {isOpenProfileModal && (
          <ProfileModal handleModalAuth={handleModalAuth} />
        )}
      </div>
      <ModalAuth isShow={showModal} handleModalAuth={handleModalAuth} />
      <ModalUser closeModal={handleModalAuth} type='login' />
    </header>
  );
};
