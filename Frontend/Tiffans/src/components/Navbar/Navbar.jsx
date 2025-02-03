import React,{useState} from 'react';
import './Navbar.css';
import { assets } from '../../assets/frontend_assets/assets';
import {Link} from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { useContext } from 'react';

const Navbar = ({setShowLogin}) => {
  const [menu,setMenu]=useState("home");
  const {getTotalCartAmount}=useContext(StoreContext);
  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.mrlogo} alt='' className='logoe' /></Link>
        <ul className='navbar-menu'>
            <Link to='/' onClick={()=>setMenu("home")} className={menu === "home" ? "active" : ""}>Home </Link>
            <a href="#explore-menu" onClick={()=>setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
            <a href="#app-download" onClick={()=>setMenu("mobileapp")} className={menu === "mobileapp" ? "active" : ""}>Mobile App</a>
            <a href="#footer" onClick={()=>setMenu("contactus")} className={menu === "contactus" ? "active" : ""}>Contact Us</a>
        </ul>
        <div className="navbar-right">
            <img className='search_img' src={assets.search_icon1} alt='' />
            <div className="navbar-search-icon">
                <Link to='/cart'><img className='basket_img' src={assets.basket_icon1} alt='' /></Link>
                <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>Sign in </button>
        </div>
    </div>
  )
}

export default Navbar;
