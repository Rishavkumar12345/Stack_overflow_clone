import React, {useState} from 'react'
import AboutAuth from './AboutAuth'
import './Auth.css'

import icon from '../../assets/icon.svg'

const Auth = () => {

  const [isSignup,setisSignup]=useState(false)

  const [name,setname]=useState('');
  const [email,setmail]=useState('');
  const [password,setpassword]=useState('');

  const handleSwitch=()=>{
    setisSignup(!isSignup)
  }

  const handlesubmit=(e)=>{
    e.preventDefault()
  }

  return (
    <section className='auth-section'>
      {isSignup && <AboutAuth/>}
      <div className='auth-container-2'>
        {!isSignup && <img src={icon} alt='stack-overflow' height="25px" width="25px" className='auth-logo'/>}
        <form onSubmit={handlesubmit}>

          {isSignup && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input type="text" name="name" id='name' onChange={(e)=>{setname(e.target.value)}}/>
            </label>
          )}

          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name="email" id='email' onChange={(e)=>{setmail(e.target.value)}}/>
          </label>
          <label htmlFor="password">
            <div style={{display:"flex", justifyContent:"space-between"}}>
              <h4>Password</h4>
              {!isSignup && <h4 style={{color:"#007ac6",fontSize:"13px"}}>Forgot Password?</h4>}
            </div>
            
            <input type="password" name='password' id='password' onChange={(e)=>{setpassword(e.target.value)}}/>
            {isSignup && <p style={{color:"#666767", fontSize:"13px"}}>Passwords must contain at least eight characters,<br/> including at least 1 letter and 1            number.</p>}
          </label>
            {isSignup && (
              <label htmlFor="check">
                <input type="checkbox" name="check" id='check' style={{width:'5%'}} />
                <p style={{fontSize:"13px"}}>Opt-in to receive occasional product<br/> updates, user research invitations, company                <br/>announcements, and digests.</p>               
              </label>
            )}
          <button type='submit' className='auth-btn'>{isSignup ? "Sign up":"Log in "}</button>
          {isSignup && <p style={{color:"#666767", fontSize:"13px"}}>By clicking “Sign up”, you agree to our terms of<br/> 
          <span style={{color:"#007ac6"}}>service, </span> 
          <span style={{color:"#007ac6"}}> privacy policy </span>  and 
          <span style={{color:"#007ac6"}}> cookie policy</span></p>}
        </form>
        <p>
          {isSignup?"Already have account ":"Don't have account "}
          <button type='button' className='auth-swith-btn' onClick={handleSwitch}>{isSignup ? "Log in":"Sign up"}</button>
        </p>
      </div>
    </section>
  )
}

export default Auth
