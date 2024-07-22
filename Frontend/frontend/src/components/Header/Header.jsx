import React from 'react'
import './Header.css'
import {assets} from '../../assets/assets'
const Header = () => {
  return (
    <div className='header'>
      <img className = 'header-img'src={assets.Header_img} alt="" />
      <div className="header-contents">
        <h2>Your Favourite Food Delivered In Minutes</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our food satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <button>
          <a href="#explore-menu">View Menu</a>
        </button>
      </div>
    </div>
  )
}

export default Header
