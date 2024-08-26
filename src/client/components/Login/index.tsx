import { CloseEyeIcon, EyeIcon } from '@components/Icons';
import { useState } from 'react';
import styles from './Login.module.scss';
import { Input } from '@components/UI/Input';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@redux/store';
import { loginUser } from '@redux/asyncThunks/userThunk';
import { Navigate } from 'react-router-dom';
import { isAuth } from '@redux/slices/userSlice';
import { Button } from '@components/UI/Button';
import { ERoutes } from '@types';

interface ILoginData {
  email: string;
  password: string;
}

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState<ILoginData>({ email: '', password: '' });

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

  const handleLogin = () => {
    dispatch(loginUser(data));
  };

  if (authStatus) {
    return <Navigate to={ERoutes.MAIN} />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Войти</h2>
        <div>
          <div className="mb-4">
            <Input
              id="email-login"
              label="Почта"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Введите почту"
              type="email"
              onChange={(e) => handleChangeInput(e, 'email')}
            />
          </div>
          <div className="mb-6 relative">
            <Input
              id="password-login"
              label="Пароль"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
              placeholder="Введите пароль"
              type={showPassword ? 'text' : 'password'}
              onChange={(e) => handleChangeInput(e, 'password')}
            />
            <div className={styles.icon} onClick={togglePasswordVisibility}>
              {showPassword ? <CloseEyeIcon /> : <EyeIcon />}
            </div>
          </div>
          <Button 
            label='Войти'
            onClick={handleLogin}
            color='blue'
          />
        </div>
      </div>
    </div>
  );
};
