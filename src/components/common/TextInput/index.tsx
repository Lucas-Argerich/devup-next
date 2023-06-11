'use client';

import React, { useId, useRef, useState } from 'react';
import styles from './index.module.css';

interface ITextInput {
  label: string;
  type?: 'text' | 'email' | 'password';
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextInput({
  label,
  type = 'text',
  onChange,
}: ITextInput) {
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [active, setActive] = useState(false);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    e.target.value.length === 0 ? setActive(false) : setActive(true);
  };

  return (
    <div
      className={`${styles.div} ${active ? styles.active : ''}`}
      onClick={handleClick}
    >
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles.input}
        id={id}
        type={type}
        ref={inputRef}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}
