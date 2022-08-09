import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to='/'> <AiOutlineHome className='rams'/> Home</Link></li>
        <li><Link to='/about'> <AiOutlineUser className='rams'/> About</Link></li>
        <li><Link to='/experience'> <BiBook className='rams'/> Experience</Link></li>
        <li><Link to='/portfolio'> <RiServiceLine className='rams'/> Portfolio</Link></li>
        <li><Link to='/contact'> <BiMessageSquareDetail className='rams'/> Contact</Link></li>
        
        
      </ul>
    </nav>
  )
}

export default Nav