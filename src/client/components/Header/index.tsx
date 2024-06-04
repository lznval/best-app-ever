import styles from './Header.module.scss';

export const Header = (): JSX.Element => {
  return (
    <>
    <header className={styles.wrapper}>
      <a className={styles.logo} href="/">PoopMarket</a>
      <div className={styles.catalog}>Каталог</div>
      <div className={styles.search}>Поисковик</div>
      <div className={styles.menu}>Меню</div>
    </header>
    </>
    
  )
}
