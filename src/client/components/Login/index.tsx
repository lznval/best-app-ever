import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@redux/store';
import { loginUser } from '@redux/asyncThunks/userThunk';
import { Navigate } from 'react-router-dom';
import { isAuth } from '@redux/slices/userSlice';
import { LoginForm } from '@components/AuthForm/LoginForm';
import { ERoutes } from 'client/utils/constants';

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
    <LoginForm
      showPassword={showPassword}
      togglePasswordVisibility={togglePasswordVisibility}
      handleChangeInput={handleChangeInput}
      handleLogin={handleLogin}
    />
  );
};
