import React from 'react'
import './css/Home.css'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'



function Home() {
  const { isAuthenticate } = useSelector(state => state.auth)

  return (
    <div className='home'>
      <div className="inner">
        <h1>Tikatuli Bank</h1>
        {isAuthenticate &&
          <h3>See Your All <button><Link to='/user/transaction'>Transactions</Link></button></h3>}
        {!isAuthenticate &&
          <h3>Please <button> Sign In</button> to get all facilities</h3>}
      </div>
    </div>
  )
}

export default Home