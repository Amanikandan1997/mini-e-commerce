import React from 'react'
import "./Login.css"
import Logo from "../assets/logo black.png"
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className='login'>
        {/* logo  */}
   <Link to="/">  <img className='login_logo' src={Logo} alt='manimart'/></Link>
   {/* login container */}
      <div className='login_container'>
        {/* formpage */}
        <form>
        <h1>Sign up</h1>
        <h5>User name</h5>
        <input type='text '/>
        <h5>email</h5>
        <input type='text '/>
        <h5>password</h5>
        <input type='password'/>
        <h5>Phone number</h5>
        <input type='text '/>
        {/* button */}
        <button type='submit' className='login_signinbutton'>Sign up</button>
       
         <p>By continuing, you agree to Manimart Conditions of Use and Privacy Notice.</p>
         <Link to="/login">
        <button type='submit' className='login_registerbutton'>Go to Sign in page</button></Link>
        </form>
        </div>
    </div>
  )
}
