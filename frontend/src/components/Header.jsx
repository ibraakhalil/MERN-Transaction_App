import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { SET_USER } from '../store/actions/types'
import './Header.css'

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isAuthenticate } = useSelector(state => state.auth)
    const logOut = (e) => {
        localStorage.removeItem('token')
        dispatch({
            type: SET_USER,
            payload: {}
        })
    }
    return (
        <div className='header'>
            <div className="wrapper">
                <ul>
                    <li>
                        <Link to='/' > Home</Link>
                    </li>
                </ul>
                {!isAuthenticate && <ul>
                    <li>
                        <Link to='/auth/login'>Login</Link>
                    </li>
                    <li>
                        <Link to='/auth/register'>Register</Link>
                    </li>
                </ul>}
                {isAuthenticate && <ul>
                    <li>
                        <Link to='/user/transaction'>Transactions</Link>
                    </li>
                    <li>
                        <Link to='/' onClick={logOut}>Log Out</Link>
                    </li>
                </ul>}
            </div>
        </div>
    )
}

export default Header