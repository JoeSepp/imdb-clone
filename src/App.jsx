import { useEffect, useState } from 'react'
import Home from './Pages/Home.jsx'
import Movie from './Pages/Movie.jsx'
import Celeb from './Pages/Celeb.jsx'
import SearchResults from './Pages/SearchResults.jsx'
import LoginPage from './Pages/LoginPage.jsx'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/:mediaType/:id' element={<Movie />} />
        <Route path='/person/:id' element={<Celeb />}/>
        <Route path='/account/sign-in' element={<LoginPage />} />
        <Route path='/search/:pageNumber/:searchType/:searchQuery' element={<SearchResults/>}/>
      </Routes>
    </BrowserRouter >
  )
}

export default App
