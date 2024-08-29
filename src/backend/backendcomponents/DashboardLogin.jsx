import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DashboardLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')

    try {
      const response = await axios.post('http://localhost:8081/login', {
        email,
        password,
      });

      // console.log(response);
      if (response.data === "success") {
        navigate('/dashboardhome');
      }

      else {
        setError('Invalid email or password.')
      }



    }
    catch (error) {
      console.error(error);
      setError('Error logging in, please check your credentials.')

    }
    // navigate('/dashboardhome');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className='mb-4'>Dashboard Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">

            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder='Email'
            />
          </div>
          <div className="input-group">

            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder='Password'
            />
          </div>
          {error && <p className="text-danger" style={{ 'textAlign': 'left' }}>{error}</p>}
          <button type="submit" className='submit-button mt-3'>Submit</button>

        </form>
      </div>
    </div>
  );
}
