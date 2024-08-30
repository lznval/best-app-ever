import { colorClasses } from 'client/utils/constants';
import { FC } from 'react';

interface IButtonProps {
  label: string;
  color?: string;
  customStyles?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<IButtonProps> = ({
  label,
  color = 'blue',
  customStyles,
  onClick,
}) => {
  return (
    <button
      onClick={onClick && onClick}
      className={`${colorClasses[color] || ''} text-white font-bold py-2 px-4 rounded transition w-full ${customStyles || ''} `}
    >
      {label}
    </button>
  );
};
