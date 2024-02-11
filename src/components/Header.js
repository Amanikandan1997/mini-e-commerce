import React, { Fragment } from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'
import Logo from '../slideimage/logo.png'
import "./Header.css"
import { ShoppingBasket } from '@material-ui/icons'


function Header() {
  return (
   <Fragment>
           <nav className="navbar row">
      <div className="col-12 col-md-3">
        <div className="navbar-brand">
          <Link to="/"><img width="150px" src={Logo} alt='MTM Mart'/></Link>
          
        </div>
        
      </div>
     
      <div className="col-12 col-md-6 mt-2 mt-md-0">
        
        <Search/>
        
      </div>

      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
      <div className='header_nav'>
        <Link to="/login">
            <div className='header_option'>
            
            <span className='header_option_line1'>hello Guest</span>
            
            <span className='header_option_line2'>Sign In</span>
            </div></Link>
            <div className='header_option'>
            <span className='header_option_line1'>Returns</span>
            
            <span className='header_option_line2'>Orders</span>
            </div>
            <div className='header_option'>
            <span className='header_option_line1'>Delivery Address</span>
            
            <span className='header_option_line2'>location</span>
            </div>
            <div className='header_optionBasket'>
              <ShoppingBasket className='basketcount'/>
            <span className='header_option_line2' >0</span>
            </div>
            </div>
     
      </div>
     
    </nav>
   </Fragment>
  )
}

export default Header