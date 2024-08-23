import { FC } from 'react';

interface IButtonProps {
  label: string;
  color?: string;
  customStyles?: string;
  onClick?: () => void;
}

export const Button: FC<IButtonProps> = ({
  label,
  color,
  customStyles,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        bg-${color}-500 
        hover:bg-${color}-600 
        text-white 
        font-bold 
        py-2 
        px-4 
        rounded
        transition
        w-full
        ${customStyles}
      `}
    >
      {label}
    </button>
  );
};
