import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { SET_USER } from '../store/actions/types'
import man from '../img/man.jpg'
import './css/Header.css'
import { useState } from 'react'

function Header() {
    const [show, setShow] = useState(false)
    const dispatch = useDispatch()
    const { isAuthenticate, user } = useSelector(state => state.auth)

    const logOut = (e) => {
        localStorage.removeItem('token')
        dispatch({
            type: SET_USER,
            payload: {}
        })
    }

    const handleShow = (e) => {
        show ? setShow(false) : setShow(true)
    }

    return (
        <div className='header'>
            <div className="wrapper">
                <ul>
                    <li>
                        <Link to='/' > Home</Link>
                    </li>
                    <li>
                        <Link to='/products' > Products</Link>
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
                {isAuthenticate && <div className="user">
                    <div className="avatar">
                        <img src={man} alt="avatar" />
                    </div>
                    <div className="name">
                        <h4>My Account</h4>
                        <p>Ibrahim Khalil</p>
                    </div>
                    <div onClick={handleShow} className="show">
                        {show && <ul>
                            <li className='balance'>
                                Balance: ${user.balance}
                            </li>
                            <li>
                                <Link to='/user/transaction'>Transactions</Link>
                            </li>
                            <li>
                                <Link to='/' onClick={logOut}>Log Out</Link>
                            </li>
                        </ul>}
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

export default Header