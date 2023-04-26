import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import Question from './component/Question/Question'
import Askquestion from './component/AskQuestion/Askquestion'
import Displayquestion from './component/Question/Displayquestion'

const AllRoutes = () => {
  return (
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/Auth' element={<Auth/>}/>
      <Route  path='/Question' element={<Question/>}/>
      <Route path='/Askquestion' element={<Askquestion/>}/>
      <Route path='/Question/:id' element={<Displayquestion/>}/>
    </Routes>
  )
}

export default AllRoutes
