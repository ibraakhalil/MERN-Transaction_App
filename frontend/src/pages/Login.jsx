import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../store/actions/authAction';
import { useNavigate } from 'react-router-dom'
import './css/Login.css'




function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { error } = useSelector(state => state.auth)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login({ email, password }, navigate))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={event => setEmail(event.target.value)}
        required
      />
      {error?.email && <div className="error-feedback">
        <p>{error.email}</p>
      </div>}
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password" 
        value={password}
        onChange={event => setPassword(event.target.value)}
        required
      />
      {error?.password && <div className="error-feedback">
        <p>{error.password}</p>
      </div>}
      <br />
      <button type="submit">Log In</button>
    </form>
  );
}

export default Login