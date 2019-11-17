import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Home from '@/pages/Home'
import About from '@/pages/About'

export const AppRouter = (props) => {
  return (
    <Router>
      <Route path='/' exact component={Home}></Route>
      <Route path='/about' component={About}></Route>
    </Router>
  )
}