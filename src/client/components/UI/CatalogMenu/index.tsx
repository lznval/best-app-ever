import React, { FC, RefObject, useRef, useState } from 'react';
import styles from './CatalogMenu.module.scss';
import cn from 'classnames';
import { useClickOutside } from 'client/utils/hooks';

const CatalogMenu: FC = ( ) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const catalogRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const closeCatalog = () => {
    setIsOpen(false)
  }

  useClickOutside(catalogRef, closeCatalog);
  return (
    <div className={cn(styles.catalog, { [styles.open]: isOpen } )} ref={catalogRef} onClick={handleClick}>
      <div
        className={styles.menu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p>Каталог</p>
    </div>
  );
};

export default CatalogMenu;
