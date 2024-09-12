import cn from 'classnames';
import { ERoutesSeller } from 'client/utils/constants';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface IFooterProps {
  customStyle: string;
}

export const Footer: FC<IFooterProps> = ({ customStyle }) => {
  return (
    <footer className={cn(customStyle, 'bg-gray-900 text-white py-8')}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <Link to={ERoutesSeller.MAIN} className="hover:text-gray-400">
              Стать продавцом
            </Link>
            <Link to="/about" className="hover:text-gray-400">
              О нас
            </Link>
            <Link to="/contact" className="hover:text-gray-400">
              Контакты
            </Link>
            <Link to="/privacy" className="hover:text-gray-400">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
