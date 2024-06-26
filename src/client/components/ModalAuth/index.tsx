import React, { FC } from 'react';
import styles from './ModalAuth.module.scss';
import { Input } from '@components/UI/Input';
import { CloseIcon } from '@components/Icons';

interface IModalAuth {
  isShow: boolean;
  handleModalAuth: () => void;
}

export const ModalAuth: FC<IModalAuth> = ({ isShow, handleModalAuth }) => {
  if (!isShow) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.wrapper}>
        <CloseIcon className={styles.close} onClick={handleModalAuth} />
        <h1>Авторизация</h1>
        <div className={styles.items}>
          <div className={styles.item}>
            <Input id="email-auth" label="Почта" />
          </div>
          <div className={styles.item}>
            <Input id="password-auth" label="Пароль" />
          </div>
          <div className={styles.item}>
            <button>Авторизоваться</button>
          </div>
        </div>
      </div>
    </div>
  );
};
