import React from 'react'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import { Header } from './components/Header'
import { Signup } from './components/auth/Signup'
import { Login } from './components/auth/Login'

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header
          logo="☘️BIBLEAF"
        />
        <Routes>
          <Route exact path="/signup" element={<Signup text={'新規登録'} />} />
          <Route exact path="/login" element={<Login text={'ログイン'} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
