import React, { useState } from 'react';
import { auth } from '../services/auth';
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const signIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await auth.signIn(email, password);
    } catch (error) {
      setError('AUTH_ERROR');
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <form onSubmit={signIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;