import React from 'react'
import "./Login.css"
import Logo from "../assets/logo black.png"
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Login() {
  return (
    <div className='login'>
        {/* logo  */}
   <Link to="/">  <img className='login_logo' src={Logo} alt='manimart'/></Link>
   {/* login container */}
      <div className='login_container'>
        {/* formpage */}
        <form>
        <h1>Sign In</h1>
        <h5>email</h5>
        <input type='text '/>
        <h5>password</h5>
        <input type='password'/>
        {/* button */}
        <button type='submit' className='login_signinbutton'>Sign in</button>
        <a href="#">Forgot password?</a>
         <p>By continuing, you agree to Manimart Conditions of Use and Privacy Notice.</p>
         <Link to="/reg">
        <button type='submit' className='login_registerbutton'>Create your Account</button></Link>
        </form>
        </div>
      
    </div>
  )
}
