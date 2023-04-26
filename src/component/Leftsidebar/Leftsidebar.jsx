import React from 'react'
import {NavLink} from 'react-router-dom';
import './Leftsidebar.css'
import globe from '../../assets/globe.svg';

const Leftsidebar = () => {
  return (
    <div className='left-sidebar'>
        <nav className='side-nav'>
            <NavLink to='/' className='side-nav-link' activeClassName='acitve'>
                <p>Home</p>
            </NavLink>
            <div className='side-nav-div'>
                <div><p> PUBLIC </p></div>
                <NavLink to='/Question' className='side-nav-link' activeClassName='acitve'>
                    <img src={globe} alt="Globe"  style={{width:'15px'}}/>
                    <p style={{paddingLeft:"10px"}}>Questions</p>
                </NavLink>
                <NavLink to='/Tag' className='side-nav-link' activeClassName='acitve'>
                    <p style={{paddingLeft:"25px"}}>Tags</p>
                </NavLink>
                <NavLink to='/User' className='side-nav-link' activeClassName='acitve'>
                    <p style={{paddingLeft:"25px"}}>Users</p>
                </NavLink>
                
            </div>
        </nav>
    </div>
  )
}

export default Leftsidebar
