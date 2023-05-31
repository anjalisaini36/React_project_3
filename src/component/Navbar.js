import React from 'react';
import { Link } from 'react-router-dom';
const Navbar=(props)=>{
    // const{title}=props;
    const tok = localStorage.getItem("Savetoken");
    console.log("tokennn", tok)
    return(
        <div> 
                <nav className='navbar'>
                  <a className='navbar-title fw-bold ' href="/">Smiley</a>
                    <ul className='navbar-list'>
                      <li><a href="/">Home</a></li> 
                      {tok == null? "" : <>
                      <li><Link to="/restrurent">Shop</Link></li>
                      <li><Link to="/menu">Product</Link></li>
                      <li><Link to="/mycart">Mycart</Link></li>
                      </>}
                      <li><a href="/">Contact Us</a></li>
                      </ul>
                      <div className='login-signup-class'><a href="/login">Login</a>
                      <a href="/signup">Signup</a></div>
                
                </nav>
        </div>
    )
};

export default Navbar;