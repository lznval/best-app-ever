import React, { useState } from 'react'
import styles from './RegisterForm.module.scss'
import { Input } from '@components/UI/Input'
import api from 'client/api';

export const RegisterForm = () => {

	const [data, setData] = useState({});

	const register = async (data: any) => {
		const response = await api.post('/auth/register', data);
		console.log(response);
		// return response.data;
	};

	const handleChangeInput = (e: any	, name: string) => {
		const item = e.currentTarget;
		setData({
			...data,
			[name]: item.value
		})
	}

	const handleRegister = async () => {
    try {
      const user = await register({...data});
      console.log('Login successful:', user);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

	console.log(data);
  return (
    <div className={styles.items}>
			<div className={styles.item}>
				<Input id="name-register" label="Введите ваше имя" onChange={(e) => handleChangeInput(e, 'fullName')} />
			</div>
			<div className={styles.item}>
				<Input id="email-register" label="Почта" onChange={(e) => handleChangeInput(e, 'email')} />
			</div>
			<div className={styles.item}>
				<Input id="password-register" label="Пароль" onChange={(e) => handleChangeInput(e, 'password')} />
			</div>
			<div className={styles.item}>
				<Input id="password-repeat-register" label="Повторите пароль" />
			</div>
			<div className={styles.item}>
				<button onClick={handleRegister}>Зарегистрироваться</button>
			</div>
		</div>
  )
}
