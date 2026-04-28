import { useEffect, useState } from 'react'
import Home from './Pages/Home.jsx'
import Movie from './Pages/Movie.jsx'
import Celeb from './Pages/Celeb.jsx'
import SearchResults from './Pages/SearchResults.jsx'
import LoginPage from './Pages/LoginPage.jsx'
import TestPage from './Pages/TestPage.jsx'
import { BrowserRouter, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import './App.css'
import RootLayout from './Pages/RootLayout.jsx'
import {formSubmitAction} from './Components/navbar/NavSearchBar.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='/:mediaType/:id' element={<Movie />} />
      <Route path='/person/:id' element={<Celeb />} />
      <Route path='/account/sign-in' element={<LoginPage />} />
      <Route path='/search/:pageNumber/:searchType/:searchQuery'/>
      <Route path='/test/' element={<TestPage/>} action={formSubmitAction}/>
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
