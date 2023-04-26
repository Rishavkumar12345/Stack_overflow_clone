import React from 'react'
import '../../App.css'
import Leftsidebar from '../Leftsidebar/Leftsidebar'
import Rightsidebar from '../Rightsidebar/Rightsidebar'
import Homesidebar from '../Homesidebar/Homesidebar'

const Question = () => {
  return (
    <div className='home-container-1'>
      <Leftsidebar/>
      <div className='home-container-2'>
        <Homesidebar/>
        <Rightsidebar/>
      </div>
    </div>
  )
}

export default Question
