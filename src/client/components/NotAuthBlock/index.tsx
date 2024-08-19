import { isAuth } from '@redux/slices/userSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './NotAuthBlock.module.scss';

export const NotAuthBlock = () => {
  const authStatus = useSelector(isAuth);
  console.log(authStatus, 'authStatus');
  if (authStatus) {
    return null;
  }

  return (
    <h2>
      Для просмотра этой страницы надо
      <Link to="/login">
        <span className={styles.link}> авторизоваться</span>
      </Link>{' '}
      или{' '}
      <Link to="/register">
        <span className={styles.link}>зарегистрироваться</span>
      </Link>
      .
    </h2>
  );
};
