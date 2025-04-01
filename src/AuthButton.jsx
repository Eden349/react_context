import React, { useContext } from 'react';
import { UserAuthContext } from './UserAuthContext';  

const AuthButton = () => {
  const { isLoggedIn, toggleAuth } = useContext(UserAuthContext);  

  return (
    <button onClick={toggleAuth}>
      {isLoggedIn ? 'Log out' : 'Log in'}
    </button>
  );
};

export default AuthButton;
