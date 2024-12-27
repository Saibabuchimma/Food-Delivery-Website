import React,{useState} from 'react';
import './Navbar.css';
import { assets } from '../../assets/frontend_assets/assets';
import {Link} from 'react-router-dom';

const Navbar = ({setShowLogin}) => {
  const [menu,setMenu]=useState("home");
  return (
    <div className='navbar'>
        <img src={assets.mrlogo} alt='' className='logoe' />
        <ul className='navbar-menu'>
            <Link to='/' onClick={()=>setMenu("home")} className={menu === "home" ? "active" : ""}>Home </Link>
            <a href="#explore-menu" onClick={()=>setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
            <a href="#app-download" onClick={()=>setMenu("mobileapp")} className={menu === "mobileapp" ? "active" : ""}>Mobile App</a>
            <a href="#footer" onClick={()=>setMenu("contactus")} className={menu === "contactus" ? "active" : ""}>Contact Us</a>
        </ul>
        <div className="navbar-right">
            <img className='search_img' src={assets.search_icon1} alt='' />
            <div className="navbar-search-icon">
                <img className='basket_img' src={assets.basket_icon1} alt='' />
                <div className="dot"></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>Sign in </button>
        </div>
    </div>
  )
}

export default Navbar;
