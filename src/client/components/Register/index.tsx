import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@redux/store';
import { registerUser } from '@redux/asyncThunks/userThunk';
import { Navigate } from 'react-router-dom';
import { isAuth } from '@redux/slices/userSlice';
import { ERoutes } from '@types';
import { RegisterForm } from '@components/AuthForm/RegisterForm';

interface IRegisterData {
  email: string;
  password: string;
  fullName: string;
}

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState<IRegisterData>({
    email: 'lizunov@test.ru',
    password: '12345',
    fullName: 'Александр Лизунов',
  });
  const [passwordRepeat, setPasswordRepeat] = useState('12345');

  const authStatus = useSelector(isAuth);
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
    const resp = await dispatch(registerUser(data));
    if (!resp.payload) {
      return alert('Не удалось зарегистрироваться! :(');
    }
  };
  if (authStatus) {
    return <Navigate to={ERoutes.MAIN} />;
  }

  return (
    <RegisterForm
      showPassword={showPassword}
      togglePasswordVisibility={togglePasswordVisibility}
      handleChangeInput={handleChangeInput}
      handleRegister={handleRegister}
      setPasswordRepeat={setPasswordRepeat}
    />
  );
};
