import { isAuth } from '@redux/slices/userSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './NotAuthBlock.module.scss';
import { ERoutes } from 'client/utils/constants';

export const NotAuthBlock = () => {
  const authStatus = useSelector(isAuth);

  if (authStatus) {
    return null;
  }

  return (
    <h2>
      Для просмотра этой страницы надо
      <Link to={ERoutes.LOGIN}>
        <span className={styles.link}> авторизоваться</span>
      </Link>{' '}
      или{' '}
      <Link to={ERoutes.REGISTER}>
        <span className={styles.link}>зарегистрироваться</span>
      </Link>
      .
    </h2>
  );
};
