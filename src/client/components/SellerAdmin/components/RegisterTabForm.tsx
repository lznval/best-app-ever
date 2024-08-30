import { RegisterForm } from '@components/AuthForm/RegisterForm';
import { registerSeller } from '@redux/asyncThunks/sellerThunk';
import { AppDispatch } from '@redux/store';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
interface IRegisterData {
  email: string;
  password: string;
  fullName: string;
}
export const RegisterTabForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState<IRegisterData>({
    email: 'lizunov@test.ru',
    password: '12345',
    fullName: 'Александр Лизунов',
  });
  const [passwordRepeat, setPasswordRepeat] = useState('12345');

  const dispatch = useDispatch<AppDispatch>();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChangeInput = (e: any, name: string) => {
    const item = e.currentTarget;
    setData({
      ...data,
      [name]: item.value,
    });
  };

  const handleRegister = async () => {
    if (data.password !== passwordRepeat) {
      alert('Пароли не совпадают!');
    }
    const resp = await dispatch(registerSeller(data));
    if (!resp.payload) {
      return alert('Не удалось зарегистрироваться! :(');
    }
  };
  return (
    <RegisterForm 
              showPassword={showPassword}
              togglePasswordVisibility={togglePasswordVisibility}
              handleChangeInput={handleChangeInput}
              handleRegister={handleRegister}
              setPasswordRepeat={setPasswordRepeat}
            />
  )
}
