import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png'
import  search  from '../../assets/search.svg'
import Avtar from '../Avtar/Avtar'
import './Navbar.css'

function Navbar() {

    var user=null

  return (
    <nav className='main-nav'>
        <div className='navbar'>
            <Link to='/' className='nav-item nav-logo'>
            <img src={logo} alt='logo' height="35px"/>
            </Link>
            <Link to='/' className='nav-item nav-btn'>About</Link>
            <Link to='/' className='nav-item nav-btn'>Product</Link>
            <Link to='/' className='nav-item nav-btn'>For team</Link>
            <form>
                <input type="text" placeholder='search..' />
                <img src={search} alt="logo" width="18px" className='search-icon'/>

            </form>

            {user===null ? 
                <Link to='/Auth' classname='nav-item nav-links' style={{padding: '5px 12px',
                    border: 'solid 1px black',
                    borderRadius: '3px',
                    cursor: 'pointer',
                    backgroundColor: '#F0F8FF',
                    textDecoration: 'none'}}>Log in</Link> :
                <>
                    <Link to='/User' style={{textDecoration:"none" ,color:"white"}}><Avtar backgroundColor="#009dff" py="6px" px="5px" borderRadius="50%"  cursor="pointer">M</Avtar></Link>
                    <button className='nav-item nav-links'>Log Out</button>
                </>
                }
        </div>
      

    </nav>
  )
}

export default Navbar
