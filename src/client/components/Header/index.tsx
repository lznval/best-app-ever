import CatalogMenu from '@components/UI/CatalogMenu';
import styles from './Header.module.scss';
import { FC, memo, useRef, useState } from 'react';
import { HeartIcon, OrdersIcon, CartIcon, UserIcon } from '@components/Icons';
import { Link } from 'react-router-dom';
import { Input } from '@components/UI/Input';
import { useClickOutside } from 'client/utils/hooks';

export const Header: FC = () => {

  const [isOpenProfileModal, setIsOpenProfileModal] = useState<boolean>(false);
  const profileModalRef = useRef<HTMLDivElement>(null);

  const handleProfileModal = () => {
    setIsOpenProfileModal(!isOpenProfileModal)
  }

  const closeProfileModal = () => {
    setIsOpenProfileModal(false)
  }

  useClickOutside(profileModalRef, closeProfileModal)

  const ProfileModal = memo(() => {
    console.log(1);
    return (
      <div className={styles.profileModal}>
          <span>Авторизоваться</span>
          <span>Регистрация</span>
        </div>
    )
  })

  return (
    <header className={styles.wrapper}>
      <Link to='/' className={styles.logo}>
        PoopMarket
      </Link>
      <div className={styles.catalog}>
        <CatalogMenu />
      </div>
      <div className={styles.search}>
        <Input placeholder='Поиск' />
      </div>
      <div className={styles.menu}>
        <HeartIcon />
        <OrdersIcon />
        <CartIcon />
      </div>
      <div className={styles.profile} ref={profileModalRef} onClick={handleProfileModal}>
        <UserIcon />
        {isOpenProfileModal && <ProfileModal />}
      </div>
    </header>
  );
};
