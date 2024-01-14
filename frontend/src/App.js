import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Routers from './router/routes'

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routers />
    </BrowserRouter>
  )
} 


export default App