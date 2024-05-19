import React from 'react'
import Img from '../../assets/vahanLogo.png'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
      <div className='container'>
        <img src={Img} alt="" />
      </div>
      <div></div>
    </div>
  )
}

export default Navbar