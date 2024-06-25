import React, { FC, RefObject, useState } from 'react';
import styles from './CatalogMenu.module.scss';
import cn from 'classnames';

type ICatalogMenuProps = {
  isOpen: boolean,
}

const CatalogMenu: FC<ICatalogMenuProps> = ({ isOpen }) => {
  return (
    <div
      className={cn(styles.menu, { [styles.open]: isOpen })}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default CatalogMenu;
