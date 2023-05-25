import React from 'react';
import styles from './index.module.css';

interface IButton {
  children?: JSX.Element | string;
  onClick?: () => void;
  type?: 'primary' | 'secondary' | 'tertiary';
}

export default function Button({ children, onClick, type }: IButton) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    onClick && onClick();
  };

  return (
    <button
      className={`${styles.button} ${
        type !== 'tertiary'
          ? type !== 'secondary'
            ? styles.primary
            : styles.secondary
          : styles.tertiary
      }`}
      onClick={(e) => handleClick(e)}
    >
      {children}
    </button>
  );
}
