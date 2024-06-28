import React, { FC } from 'react'
import styles from './ProfileModal.module.scss'
import { CloseIcon } from '@components/Icons'

interface IProfileModal {
  isOpen: boolean,
  openUserModal: (value: string) => void
}

export const ProfileModal: FC<IProfileModal> = ({ isOpen, openUserModal }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.profileModal}>
      <CloseIcon className={styles.icon} />
      <div onClick={() => openUserModal('auth')}>Авторизоваться</div>
      <div onClick={() => openUserModal('register')}>Регистрация</div>
    </div>
  );
}
