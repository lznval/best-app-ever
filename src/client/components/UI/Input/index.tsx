import React, { FC } from 'react';
import styles from './Input.module.scss';
import cn from 'classnames';

interface IInputProps {
  label?: string;
  type?: string;
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  id: string;
  className?: string;
  defaultValue?: string;
}

export const Input: FC<IInputProps> = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  required = false,
  id,
  className,
  defaultValue,
}) => {
  return (
    <div className={styles.wrapper}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={cn(styles.input, className)}
        defaultValue={defaultValue}
      />
    </div>
  );
};
