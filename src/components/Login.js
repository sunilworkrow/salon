import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError(''); 
      try {
        const response = await axios.post('http://localhost:8081/login', {
          email,
          password,
        });

        if (response.data === "success") {
          
          //  console.log("hello")

          navigate('/home');
        } else {
          setError('Invalid email or password');
        }
      } catch (error) {
        console.error('There was an error!', error);
        setError('An error occurred during login. Please try again.');
      }


    };

    return (
        <div className="login-container">
          <div className="login-box">
            <h2 className='mb-4'>Login</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                 
                  placeholder='Email'
                />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  
                  placeholder='Password'
                />
              </div>
              {error && <p className="text-left text-danger">{error}</p>}
              <button type="submit" className='submit-button mt-3'>Submit</button>
            </form>
          </div>
        </div>
      );
}
