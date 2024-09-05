import { Button } from '@components/UI/Button';
import { Input } from '@components/UI/Input';
import styles from './AuthForm.module.scss';
import { FC } from 'react';
import { CloseEyeIcon, EyeIcon } from '@components/Icons';

interface IRegisterForm {
  showPassword: boolean;
  togglePasswordVisibility: () => void;
  handleChangeInput: (e: any, name: string) => void;
  handleRegister: () => void;
  setPasswordRepeat: (e: string) => void;
}

export const RegisterForm: FC<IRegisterForm> = ({
  showPassword,
  togglePasswordVisibility,
  handleChangeInput,
  handleRegister,
  setPasswordRepeat,
}) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Регистрация</h2>
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
          <Button label="Зарегистрироваться" onClick={handleRegister} color="blue" />
        </div>
      </div>
    </div>
  );
};
