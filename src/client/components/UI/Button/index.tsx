import { colorClasses } from 'client/utils/constants';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

interface IButtonProps {
  label: string;
  color?: string;
  customStyles?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: FC<IButtonProps> = ({
  label,
  color = 'blue',
  customStyles,
  onClick,
  type = 'button',
}) => {
  return (
    <button
      onClick={onClick && onClick}
      className={`${colorClasses[color] || ''} text-white font-bold py-2 px-4 rounded transition ${customStyles || ''} `}
      type={type}
    >
      {label}
    </button>
  );
};
