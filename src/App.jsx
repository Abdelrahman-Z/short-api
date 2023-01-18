import React from 'react'
import './App.css'
import ApiHub from './components/ApiHub'
import Boost from './components/Boost'
import Footer from './components/Footer'
import Header from './components/Header'
import LandingPage from './components/LandingPage'

function App() {

  return (
    <div className="App">
      <Header />
      <LandingPage />
      <ApiHub />
      <Boost />
      <Footer/>
    </div>
  )
}

export default App
