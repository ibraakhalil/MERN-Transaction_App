import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Error404 from '../components/404'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Transaction from '../pages/Transaction'
import WhenLoggedIn from './WhenLoggedIn'


function routes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/auth/*' element={<WhenLoggedIn/>} >
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
      </Route>


      <Route path='/user/transaction' element={<Transaction/>}/>


      <Route path='*' element={<Error404 />} />
    </Routes>
  )
}

export default routes