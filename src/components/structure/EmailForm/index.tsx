'use client';

import React, { useCallback, useMemo, useState } from 'react';
import styles from './index.module.css';
import TextInput, { TextInputError } from '@/components/common/TextInput';
import Button from '@/components/common/Button';
import { emailRegex, passwordRegex, usernameRegex } from '@/utils/regex';

type InputCheck = (
  value: string | ReadonlyArray<string> | number | undefined
) => boolean;

interface IData {
  [key: string]: string | undefined;
}

const initialData: IData = {
  username: undefined,
  email: undefined,
  password: undefined,
  repeatPassword: undefined,
};

export default function EmailForm() {
  const [data, setData] = useState<IData>(initialData);

  const checkUsername: InputCheck = (value) => {
    return value !== undefined && usernameRegex.test(value.toString());
  };

  const checkEmail: InputCheck = (value) => {
    return value !== undefined && emailRegex.test(value.toString());
  };

  const checkPassword: InputCheck = (value) => {
    return value !== undefined && passwordRegex.test(value.toString());
  };

  const checkRepeatPassword: InputCheck = useCallback(
    (value) => {
      return value !== undefined && value === data.password;
    },
    [data.password]
  );

  const isValid = useMemo(
    () =>
      checkUsername(data.username) &&
      checkEmail(data.email) &&
      checkPassword(data.password) &&
      checkRepeatPassword(data.repeatPassword),
    [data, checkRepeatPassword]
  );

  const usernameError: TextInputError = {
    condition: checkUsername,
    message:
      'Invalid username. Minimum 3 characters. Allowed characters: letters (uppercase and lowercase), numbers, and underscore (_).',
  };

  const emailError: TextInputError = {
    condition: checkEmail,
    message: 'Invalid email format. Please enter a valid email address.',
  };

  const passwordError: TextInputError = {
    condition: checkPassword,
    message:
      'Invalid password. Must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one digit.',
  };

  const repeatPasswordError: TextInputError = {
    condition: checkRepeatPassword,
    message: 'Passwords do not match. Please make sure the passwords match.',
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      username: e.target.value.trim(),
    });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      email: e.target.value.trim(),
    });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      password: e.target.value.trim(),
    });
  };

  const handleRepeatPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setData({
      ...data,
      repeatPassword: e.target.value.trim(),
    });
  };

  return (
    <section className={styles.section}>
      <TextInput
        label="Username"
        onChange={handleUsernameChange}
        error={usernameError}
      />
      <TextInput
        label="Email"
        type="email"
        onChange={handleEmailChange}
        error={emailError}
      />
      <TextInput
        label="Password"
        type="password"
        onChange={handlePasswordChange}
        error={passwordError}
      />
      <TextInput
        label="Repeat Password"
        type="password"
        onChange={handleRepeatPasswordChange}
        error={repeatPasswordError}
      />
      {!isValid && 'disabled' /* Temporal. Form push/validation coming soon */}
      <div className={styles.div}>
        <Button type="tertiary">Cancel</Button>
        <Button>Sign Up</Button>
      </div>
    </section>
  );
}
