import styles from './Header.module.scss';

export const Header = (): JSX.Element => {
  return (
    <header className={styles.wrapper}>
      <img className={styles.logo} src="" alt="Logo" />
      <div className={styles.catalog}>Каталог</div>
      <div className={styles.search}>Поисковик</div>
      <div className={styles.menu}>Меню</div>
    </header>
  )
}
