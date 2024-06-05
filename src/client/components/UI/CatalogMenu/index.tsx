import React, { FC, useState } from 'react'
import styles from './CatalogMenu.module.scss';

const CatalogMenu: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className={`${styles.menu} ${isOpen ? styles.open : ''}`} onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
    </div>
  )
}

export default CatalogMenu