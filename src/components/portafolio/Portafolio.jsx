import React from 'react'
import './portafolio.css'
import IMG1 from '../../assets/portafolio1.jpg'
import IMG2 from '../../assets/portafolio2.jpg'
import IMG3 from '../../assets/portafolio3.jpg'
import IMG4 from '../../assets/portafolio4.jpg'

const Portafolio = () => {
  return (
    <section id='portafolio'>
      <h5>My Recent Work</h5>
      <h2>Portafolio</h2>

      <div className="container portafolio__container">
        
        <article className='portafolio__item'>
          <div className='portafolio__item-image'>
            <img src={IMG1} alt=''/>
          </div>
          <h3>Rick and morty app</h3>
          <div className="portafolio__item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://dribbble.com" className='btn btn-primary' target='_blank' rel="noreferrer">Live demo</a>
          </div>
        </article>
        <article className='portafolio__item'>
          <div className='portafolio__item-image'>
            <img src={IMG2} alt=''/>
          </div>
          <h3>Magic 8 ball</h3>
          <div className="portafolio__item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://dribbble.com" className='btn btn-primary' target='_blank' rel="noreferrer">Live demo</a>
          </div>
        </article>
        <article className='portafolio__item'>
          <div className='portafolio__item-image'>
            <img src={IMG3} alt=''/>
          </div>
          <h3>Calculator</h3>
          <div className="portafolio__item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://dribbble.com" className='btn btn-primary' target='_blank' rel="noreferrer">Live demo</a>
          </div>
        </article>
        <article className='portafolio__item'>
          <div className='portafolio__item-image'>
            <img src={IMG4} alt=''/>
          </div>
          <h3>Todo list</h3>
          <div className="portafolio__item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://dribbble.com" className='btn btn-primary' target='_blank' rel="noreferrer">Live demo</a>
          </div>
        </article>
        

      </div>
    </section>
  )
}

export default Portafolio