import { ERoutesSeller } from '@types';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center'>
          <div className='text-sm'>
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </div>
          <div className='flex space-x-4'>
            <Link to={ERoutesSeller.MAIN} className='hover:text-gray-400'>
              Стать продавцом
            </Link>
            <Link to='/about' className='hover:text-gray-400'>
              О нас
            </Link>
            <Link to='/contact' className='hover:text-gray-400'>
              Контакты
            </Link>
            <Link to='/privacy' className='hover:text-gray-400'>
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
