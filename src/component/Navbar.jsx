import React, { useState } from 'react'
import '../component/navbar.scss'
import{NavLink} from 'react-router-dom'

const Navbar = () => {
    
  return (
    <div className='nav'>
      <div className="wmt">
        <h1>WMT</h1>
        <h6>Wir machen <br />Technik</h6>
      </div>
      <div className="home">
        <NavLink to={'/'} className={({ isActive}) =>(isActive ? 'link-active' : 'link')}><span>home</span></NavLink>
        <NavLink to={'/about'} className={({ isActive}) =>(isActive ? 'link-active' : 'link')}><span >about</span></NavLink>
        <NavLink to={'/create'} className={({ isActive}) =>(isActive ? 'link-active' : 'link')}><span>create-blog</span></NavLink>
        </div>
    </div>
  )
}

export default Navbar