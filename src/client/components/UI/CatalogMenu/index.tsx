import React, { FC, useState } from 'react';
import styles from './CatalogMenu.module.scss';
import cn from 'classnames';

const CatalogMenu: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const x = 1;

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={cn(styles.menu, { [styles.open]: isOpen })}
      onClick={handleClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default CatalogMenu;
