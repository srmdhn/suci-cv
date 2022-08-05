import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/port0.PNG'

const portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>My Project</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG1} alt="" />

        </div>
        <h3>This My Project</h3>
        <a href="https://github.com" className='btn'>Github</a>
      </article>
    </div>
    </section>
  
  )
}
export default portfolio