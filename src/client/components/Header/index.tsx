import CatalogMenu from '@components/UI/CatalogMenu';
import styles from './Header.module.scss';
import { FC } from 'react';
import { HeartIcon, OrdersIcon, CartIcon } from '@components/Icons';

export const Header: FC = () => {
  return (
    <header className={styles.wrapper}>
      <a className={styles.logo} href="/">PoopMarket</a>
      <div className={styles.catalog}>
        <CatalogMenu />
        <span>Каталог</span>
      </div>
      <div className={styles.search}>Поисковик</div>
      <div className={styles.menu}>
        <div>
          <HeartIcon />
        </div>
        <div>
          <OrdersIcon />
        </div>
        <div>
          <CartIcon />
        </div>
      </div>
      <div className={styles.profile}>Профиль</div>
    </header>    
  )
}
