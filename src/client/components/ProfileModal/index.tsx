import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ERoutes } from '@types';
import { Button } from '@components/UI/Button';

interface IProfileModal {
  isOpen: boolean;
  onClose: () => void;
  isAuthenticated: boolean;
  userName?: string;
  onLogout: () => void;
}

export const ProfileModal: FC<IProfileModal> = ({
  isOpen,
  onClose,
  isAuthenticated,
  userName,
  onLogout,
}) => {
  if (!isOpen) return null;

  return (
    <div className='absolute top-12 right-5 flex justify-center items-center z-50'>
      <div className='bg-white rounded-lg shadow-lg w-80 p-6 relative'>
        <button
          className='absolute top-2 right-2 text-gray-400 hover:text-gray-600'
          onClick={onClose}
        >
          &times;
        </button>
        {!isAuthenticated ? (
          <div className='text-center'>
            <h2 className='text-xl font-bold mb-4'>Вы не авторизованы</h2>
            <Link to={ERoutes.LOGIN} onClick={onClose}>
              <Button color='blue' label='Авторизоваться' customStyles='mb-2' />
            </Link>
            <Link to={ERoutes.REGISTER} onClick={onClose}>
              <Button color='green' label='Регистрация' />
            </Link>
          </div>
        ) : (
          <div className='text-center'>
            <h2 className='text-xl font-bold mb-4'>
              Добро пожаловать, {userName}!
            </h2>
            <Button
              color='red'
              label='Выйти'
              onClick={onLogout}
              customStyles='mb-2'
            />
            <Button color='gray' label='Закрыть' onClick={onClose} />
          </div>
        )}
      </div>
    </div>
  );
};
