import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

function WhenLoggedIn() {
    const navigate = useNavigate()
    const { isAuthenticate } = useSelector(state => state.auth)

    return isAuthenticate ? navigate('/') : <Outlet />;

}

export default WhenLoggedIn