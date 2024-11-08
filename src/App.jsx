import { useState } from 'react'
// import Comp2 from './components/comp2'
import './App.css'
import UserContext from './context/UserContext'
import UserContextProvider from './context/userContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'


function App() {

  return (
    <UserContextProvider>
      <h1 className='text-green-800 '>Context Api</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
