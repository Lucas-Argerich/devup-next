'use client';

import React, { useEffect, useId, useRef, useState } from 'react';
import styles from './index.module.css';
import { WarnIcon } from '@/components/icons/Icons';

interface ITextInput {
  label: string;
  type?: 'text' | 'email' | 'password';
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: TextInputError;
}

export type TextInputError = {
  condition: (
    value: string | ReadonlyArray<string> | number | undefined
  ) => boolean;
  message: string;
};

export default function TextInput({
  label,
  type = 'text',
  onChange,
  error,
}: ITextInput) {
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [active, setActive] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    e.target.value.length === 0 ? setActive(false) : setActive(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    error && setHasError(!error.condition(e.target.value));
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.div} ${active ? styles.active : ''}`}
        onClick={handleClick}
      >
        <input
          className={styles.input}
          id={id}
          type={type}
          ref={inputRef}
          onChange={(e) => handleChange(e)}
          onBlur={(e) => handleBlur(e)}
        />
        <div className={styles.wrapper}>
          <label className={styles.label} htmlFor={id}>
            {label}
          </label>
          {hasError && (
            <div className={styles.errIcon}>
              <WarnIcon />
            </div>
          )}
        </div>
      </div>
      {hasError && <span className={styles.errMessage}>{error?.message}</span>}
    </div>
  );
}
