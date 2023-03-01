import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './css/Register.css'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../store/actions/authAction';

function Register() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { error } = useSelector(state => state.auth)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(register({ name, email, password, confirmPassword }, navigate))
    }


    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <h1>Registration</h1>
            <div className="form-field">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={event => setName(event.target.value)}
                    required
                />
            </div>
            <div className="form-field">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    required
                />
                <div className="error-feedback">
                    <p>{error?.email}</p>
                </div>
            </div>
            <div className="form-field">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    required
                />
            </div>
            <div className="form-field">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={event => setConfirmPassword(event.target.value)}
                    required
                />
                <div className="error-feedback">
                    <p>{error?.confirmPassword}</p>
                </div>
            </div>
            <button className="form-button" type="submit">
                Sign Up
            </button>
        </form>
    );
}

export default Register