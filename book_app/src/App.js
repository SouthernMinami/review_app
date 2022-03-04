import React from 'react'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import { Header } from './components/Header'
import { Home } from './components/review/Home'
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
          <Route exact path="/" element={<Home title={'めくったページはあなたの旅路'} />} />
          <Route exact path="/signup" element={<Signup title={'新規登録'} />} />
          <Route exact path="/login" element={<Login title={'ログイン'} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
