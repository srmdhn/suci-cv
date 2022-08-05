import React from 'react'
import './footer.css'
import {RiInstagramLine} from 'react-icons/ri'
import {MdEmail} from 'react-icons/md'
import {BsYoutube} from 'react-icons/bs'

const footer = () => { 
return (
  <footer id='footer'>
    <a href='#' className='footer__logo'>SUCI RAMADHANI SMKN 1 KOTA BEKASI</a>

    <div className='footer__social'>
      <a href="https://instagram.com/scirmdhn?igshid=YmMyMTA2M2Y/" target="_blank" rel="noopener noreferrer"><RiInstagramLine/></a>
      <a href="https://mail.google.com/" target="_blank" rel="noopener noreferrer"><MdEmail/></a>
      <a href="https://www.youtube.com/watch?v=-O6kk8k1fOI" target="_blank" rel="noopener noreferrer"><BsYoutube/></a>
    </div>

    <div className='footer__kopirek'>
      <small>&copy; Suci Ramadhani.<br/>All right reserved.</small>
    </div>
  </footer>
)
}

export default footer