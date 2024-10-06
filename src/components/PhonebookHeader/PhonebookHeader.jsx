import React from 'react';
import styles from './PhonebookHeader.module.css';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';

export const PhonebookHeader = () => {
  const dispatch = useDispatch();

  const handleLogoutUser = () => {
    dispatch(logOut());
  };

  return (
    <div className={styles.phonebookHeader}>
      <h1>Phonebook</h1>
      <button
        className={styles.logout}
        type="button"
        onClick={handleLogoutUser}
      >
        Logout
      </button>
    </div>
  );
};