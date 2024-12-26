import React,{useState} from 'react';
import './Navbar.css';
import { assets } from '../../assets/frontend_assets/assets';

const Navbar = () => {
  const [menu,setMenu]=useState("home");
  return (
    <div className='navbar'>
        <img src={assets.logoe} alt='' className='logoe' />
        <ul className='navbar-menu'>
            <li onClick={()=>setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
            <li onClick={()=>setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</li>
            <li onClick={()=>setMenu("mobileapp")} className={menu === "mobileapp" ? "active" : ""}>Mobile App</li>
            <li onClick={()=>setMenu("contactus")} className={menu === "contactus" ? "active" : ""}>Contact Us</li>
        </ul>
        <div className="navbar-right">
            <img className='search_img' src={assets.search_icon1} alt='' />
            <div className="navbar-search-icon">
                <img className='basket_img' src={assets.basket_icon1} alt='' />
                <div className="dot"></div>
            </div>
            <button>Sign in </button>
        </div>
    </div>
  )
}

export default Navbar;
