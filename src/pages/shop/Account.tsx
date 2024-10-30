import React, { useState } from 'react';

const AccountCreation = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccount = () => {
    // Implement account creation logic
    console.log("Account Created:", { username, password });
  };

  return (
    <div className="account-creation">
      <h2>Create Account</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleCreateAccount}>Create Account</button>
    </div>
  );
};

export default AccountCreation;
