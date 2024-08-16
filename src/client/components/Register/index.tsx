import { CloseEyeIcon, EyeIcon } from '@components/Icons';
import { useState } from 'react';
import styles from './Register.module.scss';
import { Input } from '@components/UI/Input';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@redux/store';
import { registerUser } from '@redux/asyncThunks/userThunk';
import { Navigate } from 'react-router-dom';
import { isAuth } from '@redux/slices/userSlice';

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
  const [passwordRepeat, setPasswordRepeat] = useState('');

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

  const handleRegister = () => {
    if (data.password === passwordRepeat) {
      console.log(data);
      dispatch(registerUser(data));
    } else {
      alert('Пароли не совпадают!');
    }
  };

  if (authStatus) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Войти</h2>
        <div>
          <div className="mb-4">
            <Input
              id="fullname-register"
              label="Имя и фамилия"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Введите ваше имя и фамилию"
              type="text"
              onChange={(e) => handleChangeInput(e, 'fullName')}
              defaultValue="Александр Лизунов"
            />
          </div>
          <div className="mb-4">
            <Input
              id="email-register"
              label="Почта"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Введите почту"
              type="email"
              onChange={(e) => handleChangeInput(e, 'email')}
              defaultValue="lizunov@test.ru"
            />
          </div>
          <div className="mb-6 relative">
            <Input
              id="password-register"
              label="Пароль"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
              placeholder="Введите пароль"
              type={showPassword ? 'text' : 'password'}
              onChange={(e) => handleChangeInput(e, 'password')}
              defaultValue="12345"
            />
            <div className={styles.icon} onClick={togglePasswordVisibility}>
              {showPassword ? <CloseEyeIcon /> : <EyeIcon />}
            </div>
          </div>
          <div className="mb-6 relative">
            <Input
              id="password_repeat-register"
              label="Повторите пароль"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
              placeholder="Повторите пароль"
              type={showPassword ? 'text' : 'password'}
              onChange={(e) => setPasswordRepeat(e.target.value)}
              defaultValue="12345"
            />
          </div>
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
            onClick={handleRegister}
          >
            Войти
          </button>
        </div>
      </div>
    </div>
  );
};
