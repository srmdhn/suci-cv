import React from 'react'
import'./about.css'
import Me from '../../assets/me.jpeg'
import { FaBirthdayCake } from 'react-icons/fa'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import {BsGenderMale } from 'react-icons/bs'
import {RiRoadMapFill} from 'react-icons/ri'

const About = () => {
return (
  <section id='about'>
    <h5>Description</h5>
    <h2>About Me</h2>

  <div className='container about__container'>
    <div className='about__me'>
      <div className='about__me-image'>
        <img src={Me} alt='foto profil' />
      </div>
    </div>

    <div className='about__content'>
      <div className=' about__cards'>
        <article className='about__card'>
          <FaBirthdayCake className="about__icon" />
          <h5>Date of Birth</h5>
          <small>02 Oktober 2005</small>
        </article>

        <article className=' about__card'>
          <BsFillMoonStarsFill className="about__icon" />
          <h5>Religion</h5>
          <small>Islam</small>
        </article>

        <article className='about__card'>
          <BsGenderMale className="about__icon" />
          <h5>Gender</h5>
          <small>Perempuan / Famale</small>
        </article>
        </div>
        <div className='about__cardl'>
        <article className='about__card'>
          <RiRoadMapFill className="about__icon" />
          <h5>Address</h5>
          <small><a href='https://maps.app.goo.gl/iM11SauRbEKV55Hz7' target="_blank" rel="noopener noreferrer">JL.Beringin Raya,RT.005/RW.004, Kranji, Kec. Bekasi Barat., Kota Bks, Jawa Barat</a></small>
        </article>
        </div>

      <p>
      Assalammualaikum, halo!, perkenalkan saya siswi dari jurusan Rekayasa Perangkat Lunak SMKN 1 KOTA BEKASI. Memiliki ketertarikan dengan dunia IT.
      </p>

      <a href="#contact" className='btn btn-primary'>Lets Talk</a>
    </div>
  </div>

  </section>
)
}

export default About 