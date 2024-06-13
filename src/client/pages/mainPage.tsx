import React, { ChangeEvent, useEffect, useState } from 'react';
import { SellerMainPage } from './seller';
import { CustomerMainPage } from './customer';
import api from 'client/api';

interface IUserAuth {
  [key: string]: string;
}

const MainPage = () => {
  const [data, setData] = useState<IUserAuth>({});
  const [token, setToken] = useState<string>('');

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleGetData = () => {
    api.post('auth/login', data).then((res) => {
      setToken(res.data.token);
      console.log(res);
    });
  };

  const checkAuth = () => {
    api
      .get('/auth/me', { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <>
      <div>
        <label htmlFor="email">Почта: </label>
        <input
          value={data.email || ''}
          type="text"
          name="email"
          id="email"
          placeholder="Введите вашу почту"
          onChange={handleChangeInput}
        />
      </div>
      <div>
        <label htmlFor="password">Пароль: </label>
        <input
          value={data.password || ''}
          type="text"
          name="password"
          id="password"
          placeholder="Введите пароль"
          onChange={handleChangeInput}
        />
      </div>
      <div>
        <button onClick={handleGetData}>Отправить данные</button>
        <button onClick={checkAuth}>Проверка логина</button>
      </div>
      <SellerMainPage />
      <CustomerMainPage />
    </>
  );
};

export default MainPage;
