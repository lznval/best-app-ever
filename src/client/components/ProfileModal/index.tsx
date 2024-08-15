import React, { FC } from 'react';
import styles from './ProfileModal.module.scss';
import { CloseIcon } from '@components/Icons';
import { Link } from 'react-router-dom';

interface IProfileModal {
  isOpen: boolean;
}

export const ProfileModal: FC<IProfileModal> = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.profileModal}>
      <CloseIcon className={styles.icon} />
      <Link to='/login'>Авторизоваться</Link>
      <Link to='/register'>Регистрация</Link>
    </div>
  );
};
