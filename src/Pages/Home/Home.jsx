import React from 'react'
import '../../App.css'
import Leftsidebar from '../../component/Leftsidebar/Leftsidebar'
import Rightsidebar from '../../component/Rightsidebar/Rightsidebar'
import Homesidebar from '../../component/Homesidebar/Homesidebar'

const Home = () => {
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

export default Home
