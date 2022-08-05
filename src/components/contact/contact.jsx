import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>suci21005@gmail@gmail.com</h5>
            <a href='mailto:suci21005@gmail.com' target='_blank'>Send a message / 여기에 채우기</a>
          </article>
          <article className='contact__option'>
            <BsInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>scirmdhn</h5>
            <a href='https://instagram.com/scirmdhn?igshid=YmMyMTA2M2Y=' target='_blank'>Send a message / 여기에 채우기</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>안녕하세요!  원하는 경우 기입하십시오 / Halo! Silahkan diisi Jika Berkenan</h5>
            <a href='https://api.whatsapp.com/send?phone=+6283897252418' target='_blank'>Send a message / 여기에 채우기</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS */}
        <form action=''>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea type='message' rows='7' placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message / 여기에 채우기</button>
        </form>
      </div>
    </section>
  )
}
export default contact 