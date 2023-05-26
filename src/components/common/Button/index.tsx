'use client';

import React from 'react';
import styles from './index.module.css';

interface IButton {
  children?: JSX.Element | string;
  onClick?: () => void;
  type?: 'primary' | 'secondary' | 'tertiary';
  fill?: boolean;
}

export default function Button({ children, onClick, type, fill }: IButton) {
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
      style={fill ? { width: '100%' } : { width: 'auto' }}
      onClick={(e) => handleClick(e)}
    >
      {children}
    </button>
  );
}
