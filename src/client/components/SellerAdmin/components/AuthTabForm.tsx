import { LoginForm } from '@components/AuthForm/LoginForm';
import { loginSeller } from '@redux/asyncThunks/sellerThunk';
import { loginUser } from '@redux/asyncThunks/userThunk';
import { logoutUser } from '@redux/slices/userSlice';
import { AppDispatch } from '@redux/store';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
interface ILoginData {
  email: string;
  password: string;
}
export const AuthTabForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState<ILoginData>({ email: '', password: '' });

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
    dispatch(loginSeller(data));
    dispatch(logoutUser());
  };
  return (
    <LoginForm
      showPassword={showPassword}
      togglePasswordVisibility={togglePasswordVisibility}
      handleChangeInput={handleChangeInput}
      handleLogin={handleLogin}
    />
  );
};
