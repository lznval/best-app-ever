import React, { FC } from 'react'
import styles from './Input.module.scss';

type TInputProps = {
    placeholder?: string
}

export const Input: FC<TInputProps> = ({ placeholder }) => {
  return (
    <input className={styles.input} type="text" placeholder={placeholder || ''} />
  )
}
