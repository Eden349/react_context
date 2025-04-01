import React from 'react';
import { UserAuthProvider } from './UserAuthContext';  
import AuthButton from './AuthButton';
import StatusMessage from './StatusMessage';

const App = () => {
  return (
    <UserAuthProvider>
      <h1>Authentication Status</h1>
      <AuthButton />
      <StatusMessage />
    </UserAuthProvider>
  );
};

export default App;
