import React from 'react'
import styles from './RegisterForm.module.scss'
import { Input } from '@components/UI/Input'

export const RegisterForm = () => {
  return (
    <div className={styles.items}>
			<div className={styles.item}>
				<Input id="name-register" label="Введите ваше имя" />
			</div>
			<div className={styles.item}>
				<Input id="email-register" label="Почта" />
			</div>
			<div className={styles.item}>
				<Input id="password-register" label="Пароль" />
			</div>
			<div className={styles.item}>
				<Input id="password-register-repeat" label="Повторите пароль" />
			</div>
			<div className={styles.item}>
				<button>Зарегистрироваться</button>
			</div>
		</div>
  )
}
