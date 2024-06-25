import CatalogMenu from '@components/UI/CatalogMenu';
import styles from './Header.module.scss';
import { FC } from 'react';
import { HeartIcon, OrdersIcon, CartIcon, UserIcon } from '@components/Icons';
import { Link } from 'react-router-dom';
import { Input } from '@components/UI/Input';

export const Header: FC = () => {  
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
      <div className={styles.profile}>
        <UserIcon />
        <div className={styles.profileModal}>
          <span>Авторизоваться</span>
          <span>Регистрация</span>
        </div>
      </div>
    </header>
  );
};
