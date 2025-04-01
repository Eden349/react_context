import React, { useContext } from 'react';
import { UserAuthContext } from './UserAuthContext';  

const StatusMessage = () => {
  const { isLoggedIn } = useContext(UserAuthContext);  

  return (
    <p>{isLoggedIn ? 'You are logged in.' : 'You are logged out.'}</p>
  );
};

export default StatusMessage;
