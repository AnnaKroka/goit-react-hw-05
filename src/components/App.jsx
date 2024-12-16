import { useEffect, useState } from 'react'
import s from "./App.module.css"
import { Route, Routes } from 'react-router-dom'
import HomePage from "../pages/HomePage/HomePage"
import MoviesPage from "../pages/MoviesPage/MoviesPage"
import Navigation from './Navigation/Navigation'


function App() {
 
 
  return (
    <>
    
      <div className={s.container}>
        <Navigation />
       <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
       </Routes>

      </div>

    </>
  )
}

export default App
