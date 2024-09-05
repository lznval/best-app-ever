import { CloseEyeIcon, EyeIcon } from '@components/Icons';
import { Button } from '@components/UI/Button';
import { Input } from '@components/UI/Input';
import styles from './AuthForm.module.scss';
import { FC } from 'react';

interface ILoginForm {
  showPassword: boolean;
  togglePasswordVisibility: () => void;
  handleChangeInput: (e: any, name: string) => void;
  handleLogin: () => void;
}

export const LoginForm: FC<ILoginForm> = ({
  showPassword,
  togglePasswordVisibility,
  handleChangeInput,
  handleLogin,
}) => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-xl shadow-md w-full max-w-sm'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Войти</h2>
        <div>
          <div className='mb-4'>
            <Input
              id='email-login'
              label='Почта'
              className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
              placeholder='Введите почту'
              type='email'
              onChange={(e) => handleChangeInput(e, 'email')}
            />
          </div>
          <div className='mb-6 relative'>
            <Input
              id='password-login'
              label='Пароль'
              className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10'
              placeholder='Введите пароль'
              type={showPassword ? 'text' : 'password'}
              onChange={(e) => handleChangeInput(e, 'password')}
            />
            <div className={styles.icon} onClick={togglePasswordVisibility}>
              {showPassword ? <CloseEyeIcon /> : <EyeIcon />}
            </div>
          </div>
          <Button label='Войти' onClick={handleLogin} color='blue' />
        </div>
      </div>
    </div>
  );
};
