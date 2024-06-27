import React, { FC, useState } from 'react'
import styles from './ModalUser.module.scss'
interface IModalUser {
  closeModal: () => void;
	type?: string
}

export const ModalUser: FC<IModalUser> = ({ closeModal, type }) => {
	const [activeTab, setActiveTab] = useState<string>(type || 'login');

	const LoginForm = () => {
		return (
			<div>LoginForm</div>
		)
	}

	const RegisterForm = () => {
		return (
			<div>RegisterForm</div>
		)
	}

  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <div className={styles.modal_header}>
          <button onClick={() => setActiveTab('login')} className={activeTab === 'login' ? 'active' : ''}>Авторизация</button>
          <button onClick={() => setActiveTab('register')} className={activeTab === 'register' ? 'active' : ''}>Регистрация</button>
          <button onClick={closeModal} className={styles.close_button}>×</button>
        </div>
        <div className={styles.modal_body}>
          {activeTab === 'login' ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </div>
  )
}
