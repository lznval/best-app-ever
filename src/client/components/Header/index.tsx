import CatalogMenu from '@components/UI/CatalogMenu';
import styles from './Header.module.scss';
import { FC, useRef, useState } from 'react';
import { HeartIcon, OrdersIcon, CartIcon, UserIcon } from '@components/Icons';
import { Link } from 'react-router-dom';
import { Input } from '@components/UI/Input';
import { useClickOutside } from 'client/utils/hooks';

export const Header: FC = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const catalogRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useClickOutside(catalogRef, handleClick);
  
  return (
    <header className={styles.wrapper}>
      <Link to='/' className={styles.logo}>
        PoopMarket
      </Link>
      <div ref={catalogRef} className={styles.catalog} onClick={handleClick}>
        <CatalogMenu isOpen={isOpen} />
        Каталог
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
