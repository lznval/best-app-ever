import React, { FC, useEffect, useState } from 'react'
import styles from './UserModal.module.scss'
import { AuthForm } from './components/AuthForm';
import { RegisterForm } from './components/RegisterForm';
import { CloseIcon } from '@components/Icons';
interface IUserModal {
  closeModal: () => void;
	type: string,
  isOpen: boolean
}

export const UserModal: FC<IUserModal> = ({ closeModal, type, isOpen }) => {
	const [activeTab, setActiveTab] = useState<string>(type);

  useEffect(() => {
    setActiveTab(type);
  }, [type]);

  
  if (!isOpen) return null;
  
  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <div className={styles.modal_header}>
          <button onClick={() => setActiveTab('auth')} className={activeTab === 'auth' ? styles.active : ''}>Авторизация</button>
          <button onClick={() => setActiveTab('register')} className={activeTab === 'register' ? styles.active : ''}>Регистрация</button>
          <CloseIcon onClick={closeModal} className={styles.close_button} />
        </div>
        <div className={styles.modal_body}>
          {activeTab === 'auth' ? <AuthForm /> : <RegisterForm />}
        </div>
      </div>
    </div>
  )
}
