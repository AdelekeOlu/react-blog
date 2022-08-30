import React, { useState } from 'react'
import '../component/navbar.scss'
import{Link} from 'react-router-dom'

const Navbar = () => {
  const [color_home, setColor_home] = useState('');
  const [color_about, setColor_about] = useState('');
  const [color_create, setColor_create] = useState('');
    let c = 0;
    function handleColor_about(){
      setColor_about('orangered')
      setColor_home('')
      setColor_create('')
    }

    function handleColor_home(){
      setColor_about('');
      setColor_home('orangered')
      setColor_create('')
    }

    function handleColor_create(){
      setColor_about('');
      setColor_home('')
      setColor_create('orangered')
    }
    
  
  return (
    <div className='nav'>
      <div className="wmt">
        <h1>WMT</h1>
        <h6>Wir machen <br />Technik</h6>
      </div>
      <div className="home">
        <Link to={'/'}><span onClick={()=> handleColor_home()} style={{color:color_home}}>home</span></Link>
        <Link to={'/about'}><span onClick={()=> handleColor_about()} style={{color:color_about}}>about</span></Link>
        <Link to={'/create'}><span onClick={()=> handleColor_create()} style={{color:color_create}}>create-blog</span></Link>
        </div>
    </div>
  )
}

export default Navbar