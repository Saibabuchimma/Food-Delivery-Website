import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'
const Footer = () => {
  return (
    <div className="footer" id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img className='logoss' src={assets.logoe} alt='' />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim ipsum, molestiae, voluptatem nemo suscipit eius minima rem consectetur mollitia autem libero numquam. Amet non consectetur quasi commodi deleniti veniam magnam.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt='' />
                    <img src={assets.twitter_icon} alt='' />
                    <img src={assets.linkedin_icon} alt='' />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 7894561342</li>
                    <li>contact@fastsend.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 @ Fastsend.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
