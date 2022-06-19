import React from 'react'
import {Routes,Route} from "react-router-dom"
import { Afganistan } from '../pages/Afganistan'
import { News } from '../pages/News'
import { Series } from '../pages/Series'
import { SeriesDetails } from '../pages/SeriesDetails'
import { Teams } from '../pages/Teams'
import { Home } from './Home'
import { LiveShow } from './LiveShow'
import Nav from './Navbar'

export const AllRoutes = () => {
  return (
    <div>
        <Nav/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/series" element={<Series/>}></Route>
            <Route path="/series/:id" element={<SeriesDetails/>}></Route>
            <Route path="/teams" element={<Teams/>}></Route>
            <Route path="/teams/:name" element={<Afganistan/>}></Route>
            <Route path="/news" element={<News/>}></Route>
        </Routes>
    </div>
  )
}
