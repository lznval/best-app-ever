import React, { ChangeEvent, useState } from 'react';
import styles from './AuthForm.module.scss';
import { Input } from '@components/UI/Input';
import api from 'client/api';

interface LoginData {
  email: string;
  password: string;
}

export const AuthForm = () => {
  const [data, setData] = useState({});

  const login = async (data: any) => {
    const response = await api.post('/auth/login', data);
    return response.data;
  };

  const handleChangeInput = (e: any, name: string) => {
    const item = e.currentTarget;
    setData({
      ...data,
      [name]: item.value,
    });
  };

  const handleLogin = async () => {
    try {
      const user = await login({ ...data });
      console.log('Login successful:', user);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className={styles.items}>
      <div className={styles.item}>
        <Input
          id="email-auth"
          label="Почта"
          onChange={(e) => handleChangeInput(e, 'email')}
        />
      </div>
      <div className={styles.item}>
        <Input
          id="password-auth"
          label="Пароль"
          onChange={(e) => handleChangeInput(e, 'password')}
        />
      </div>
      <div className={styles.item}>
        <button onClick={handleLogin}>Авторизоваться</button>
      </div>
    </div>
  );
};
