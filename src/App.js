import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Header/>
     <Outlet></Outlet>
    <Footer/>
    </>
  )
}

export default App
