import React from 'react'
import './Footer.css'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
            <Link className="navbar-brand text-white fw-bold" to="/">
                      <span className="logo-icon">🍔</span>SWIGATTO
                    </Link>
                <p>Bringing delicious meals from your favorite restaurants directly to your doorstep. Experience convenience, quality, and fast delivery, all in one place.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt=''/>
                    <img src={assets.twitter_icon} alt=''/>
                    <img src={assets.linkedin_icon} alt=''/>
                </div>
            </div>

            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/explore'><li>Explore</li></Link>
                    <Link to='/about'><li>About</li></Link>
                    <Link to='/contact'><li>Contact</li></Link>
                </ul>
            </div>

            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-820-842-4261</li>
                    <li>support@swigatto.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">
            Copyright 2025 @ swigatto.com - All Right Reserved
        </p>
    </div>
  )
}

export default Footer