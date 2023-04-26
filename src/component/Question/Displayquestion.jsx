import React from 'react'
import Leftsidebar from '../Leftsidebar/Leftsidebar'
import Rightsidebar from '../Rightsidebar/Rightsidebar'
import '../../App.css'
import Questiondetails from './Questiondetails'

const Displayquestion = () => {
  return (
    <div className='home-container-1'>
      <Leftsidebar/>
      <div className='home-container-2'> 
        <Questiondetails/>
        <Rightsidebar/>
      </div>
    </div>
  )
}

export default Displayquestion

