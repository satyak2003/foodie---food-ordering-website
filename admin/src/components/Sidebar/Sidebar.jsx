import React from 'react';
import './Sidebar.css'; 
import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
          <img className='buttons' src={assets.add_icon} alt="" />
            <p>Add Item</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
          <img className='buttons' src={assets.order} alt="" />
            <p>List items</p>
        </NavLink>
        <NavLink to='/order' className="sidebar-option">
          <img className='buttons' src={assets.order} alt="" />
            <p>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
