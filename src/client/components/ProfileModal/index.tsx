import React, { FC } from 'react';
import styles from './ProfileModal.module.scss';
import { CloseIcon } from '@components/Icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, isAuth, stateSelect } from '@redux/slices/userSlice';
import { AppDispatch } from '@redux/store';

interface IProfileModal {
  isOpen: boolean;
}

export const ProfileModal: FC<IProfileModal> = ({ isOpen }) => {
  const isLogin = useSelector(isAuth);
  const state = useSelector(stateSelect);
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    dispatch(logoutUser());
  };
  if (!isOpen) return null;

  return (
    <>
      {isLogin ? (
        <div className={styles.profileModal}>
          <CloseIcon className={styles.icon} />
          <p>{state.auth.data?.fullName}</p>
          <p onClick={handleLogout}>Выйти</p>
        </div>
      ) : (
        <div className={styles.profileModal}>
          <CloseIcon className={styles.icon} />
          <Link to="/login">Авторизоваться</Link>
          <Link to="/register">Регистрация</Link>
        </div>
      )}
    </>
  );
};
