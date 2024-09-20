import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from "../pages/home-page/Home"
import Layout from '../layout/Layout'
import Description from '../pages/description-pages/Description'


function RouteController() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/:villaName' element={<Description/>}/>
            </Route>
        </Routes>

    </Router>

  )
}

export default RouteController