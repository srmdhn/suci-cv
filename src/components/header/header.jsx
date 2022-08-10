import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/tampil-removebg-preview.png'
import HeaderSocials from './HeaderSocials'

const header =({feel}) => {
  const {annyeong, setAnnyeong} = feel
  const {rams, setRams} = feel
  const {sram, setSrams} = feel
  const {eon, setEon} = feel

function sapa(){
    setAnnyeong ( "안녕하세요 여러분")
}

function identitas(){
    setRams ("SMKN 1 KOTA BEKASI")
}

function sy(){
  setSrams ("its Suci")
}

function ay(){
  setEon ("GO")
}

  return (
    <header>
      <div className="container header__container">
        <div className='title'>
          <h5>{annyeong}</h5>
          <h1>{rams}</h1>
          <h5>{sram}</h5>
          <h1>{eon}</h1>
        </div>
       <button className='btn btn-pimary' onClick={() => {sapa(); identitas(); sy(); ay(); }}><i><b>TAP</b></i></button>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header