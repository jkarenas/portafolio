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
          <iframe width="400" height="300" src="https://www.youtube.com/embed/DA6Jt5r7DqE?si=sGWL16DVWGrEZ-I-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <h3>Countries Project</h3>
          <div className="portafolio__item-cta">
            <a href="https://github.com/jkarenas/Countries-Pi-front.git" className='btn'>Github</a>
            <a href="https://dribbble.com" className='btn btn-primary' target='_blank' rel="noreferrer">Live demo</a>
          </div>
        </article>
        <article className='portafolio__item'>
          <div className='portafolio__item-image'>
          <iframe width="400" height="300" src="https://www.youtube.com/embed/YL1xYEulAyY?si=920R0_DTlP2VagrG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <h3>Videogames Project</h3>
          <div className="portafolio__item-cta">
            <a href="https://github.com/jkarenas/videogames_pi_Juan.git" className='btn'>Github</a>
            <a href="https://dribbble.com" className='btn btn-primary' target='_blank' rel="noreferrer">Live demo</a>
          </div>
        </article>
        <article className='portafolio__item'>
          <div className='portafolio__item-image'>
          <iframe width="400" height="300" src="https://www.youtube.com/embed/ZdBoS-HwlYY?si=RwHBQ4JjXC44f_s9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <h3>PF project</h3>
          <div className="portafolio__item-cta">
            <a href="https://github.com/danielhh-dev/NEOGN" className='btn'>Github</a>
            <a href="https://dribbble.com" className='btn btn-primary' target='_blank' rel="noreferrer">Live demo</a>
          </div>
        </article>
        

      </div>
    </section>
  )
}

export default Portafolio