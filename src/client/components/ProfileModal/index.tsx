import React, { FC } from 'react';
import styles from './ProfileModal.module.scss';
import { CloseIcon } from '@components/Icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLogin, stateSelect } from '@redux/slices/authSlice';

interface IProfileModal {
  isOpen: boolean;
}

export const ProfileModal: FC<IProfileModal> = ({ isOpen }) => {
  const isLogin = useSelector(selectLogin);
  const state = useSelector(stateSelect);
  if (!isOpen) return null;
  console.log(state, 'state');
  console.log(isLogin, 'isLogin');

  return (
    <>
      {isLogin ? (
        <div className={styles.profileModal}>
          <CloseIcon className={styles.icon} />
          <p>{state.auth.data.fullName}</p>
        </div>
      ) : (
        <div className={styles.profileModal}>
          <CloseIcon className={styles.icon} />
          <Link to='/login'>Авторизоваться</Link>
          <Link to='/register'>Регистрация</Link>
        </div>
      )}
    </>
  );
};
