import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../Context/userContext';
import apiUrls from '../utils/apiUrls';

const LoginPage = () => {
  const [role, setRole] = useState('user'); // default role
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { setUserData } = useUser();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post(apiUrls.login, {
        email,
        password,
        role,
      });

      const { token, user } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('role', role);

      setUserData({
        user_id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      });

      if (role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/user');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        .login-container {
          max-width: 400px;
          margin: 80px auto;
          padding: 30px;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .login-container h2 {
          text-align: center;
          margin-bottom: 25px;
          color: #007bff;
        }
        .role-group {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-bottom: 20px;
        }
        .role-option {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 16px;
        }
        .login-container input {
          width: 100%;
          padding: 12px;
          margin-bottom: 15px;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-size: 16px;
        }
        .login-btn {
          width: 100%;
          padding: 14px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 18px;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .login-btn:hover:not(:disabled) {
          background-color: #0056b3;
        }
        .login-btn:disabled {
          background-color: #9dc9ff;
          cursor: not-allowed;
        }
        .error {
          color: red;
          font-size: 14px;
          margin-bottom: 10px;
          text-align: center;
        }
        .spinner {
          border: 3px solid #f3f3f3;
          border-top: 3px solid white;
          border-radius: 50%;
          width: 18px;
          height: 18px;
          animation: spin 1s linear infinite;
          display: inline-block;
          margin-right: 8px;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      <div className="login-container">
        <h2>Login</h2>

        {/* Role Toggle */}
        <div className="role-group">
          <label className="role-option">
            <input
              type="radio"
              name="role"
              value="user"
              checked={role === 'user'}
              onChange={() => setRole('user')}
            />
            User
          </label>
          <label className="role-option">
            <input
              type="radio"
              name="role"
              value="admin"
              checked={role === 'admin'}
              onChange={() => setRole('admin')}
            />
            Admin
          </label>
        </div>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <div className="error">{error}</div>}

          <button type="submit" disabled={loading} className="login-btn">
            {loading ? (
              <>
                <span className="spinner"></span> Logging in...
              </>
            ) : (
              'Login'
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
