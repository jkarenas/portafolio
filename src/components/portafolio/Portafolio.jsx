import React from 'react'
import './portafolio.css'
import IMG1 from '../../assets/portafolio1.jpg'
import IMG2 from '../../assets/portafolio2.jpg'
import IMG3 from '../../assets/portafolio3.jpg'
import IMG4 from '../../assets/portafolio4.jpg'
import crudImage from '../../assets/crudImage.png'

const Portafolio = () => {
  return (
    <section id='portafolio'>
      <h5>My Recent Work</h5>
      <h2>Portafolio</h2>

      <div className="container portafolio__container">

      <article className='portafolio__item'>
          <div className='portafolio__item-image'>
          <iframe width="400" height="300" src="https://www.youtube.com/embed/v9pxbm21jME" title="netflix video " frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <h3>Netflix</h3>
          <div className="portafolio__item-cta">
            <a href="https://github.com/jkarenas/netflix-react" className='btn'>Github</a>
            <div  className='dropdown' >
              <button>Description</button>
              <div className='content'>
                <p>This app simulates a Netflix app, bringing the most popular movies and series, It was made with react.js, emotion css, node.js and SQL  </p>
              </div>
            </div>
          </div>
        </article>
        
        <article className='portafolio__item'>
          <div className='portafolio__item-image'>
            <img src={crudImage} alt=''/>
          </div>
          
          <h3>CRUD</h3>
          <div className="portafolio__item-cta">
            <a href="https://github.com/Fabian2023/CRUDBYSTEP" className='btn'>Github</a>
           
            <div  className='dropdown' >
              <button>Description</button>
              <div className='content'>
                <p> CRUD with conextion to DB. Made with postgresSQL, HTML , CSS, Express,Node.js </p>
              </div>
            </div>
          </div>


        </article>
        <article className='portafolio__item'>
          <div className='portafolio__item-image'>
          <iframe width="400" height="300" src="https://www.youtube.com/embed/ZdBoS-HwlYY?si=RwHBQ4JjXC44f_s9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <h3>PF project</h3>
          <div className="portafolio__item-cta">
            <a href="https://github.com/danielhh-dev/NEOGN" className='btn'>Github</a>
            <div  className='dropdown' >
              <button>Description</button>
              <div className='content'>
                <p> E-commerce of tech devices , it includes functionalities like 3rd party auth, Dashboard, cart among others. Made with  JAvaScript, React.js, Redux toolkit, Tailwind,
                    Express, Node.js, Figma, PostgresSQL </p>
              </div>
            </div>
          </div>
        </article>
        <article className='portafolio__item'>
          <div className='portafolio__item-image'>
          <iframe width="400" height="300" src="https://www.youtube.com/embed/DA6Jt5r7DqE?si=sGWL16DVWGrEZ-I-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <h3>Countries Project</h3>
          <div className="portafolio__item-cta">
            <a href="https://github.com/jkarenas/Countries-Pi-front.git" className='btn'>Github</a>
            <div  className='dropdown' >
              <button>Description</button>
              <div className='content'>
                <p> This app allows the user to navigate through the detail of each country and create activities to do there. Made with Javascript, React.js, Express, postgresSQL, css and used of apis </p>
              </div>
            </div>
          </div>
        </article>
        <article className='portafolio__item'>
          <div className='portafolio__item-image'>
          <iframe width="400" height="300" src="https://www.youtube.com/embed/YL1xYEulAyY?si=920R0_DTlP2VagrG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <h3>Videogames Project</h3>
          <div className="portafolio__item-cta">
            <a href="https://github.com/jkarenas/videogames_pi_Juan.git" className='btn'>Github</a>
            <div  className='dropdown' >
              <button>Description</button>
              <div className='content'>
                <p>The app allows to get information and detail about videogames from an api. It has combined filters, landing page and form to validate the creation of a new game. Made with JavaScript React.js, Express, css , used of apis, postgresSQL  </p>
              </div>
            </div>
          </div>
        </article>

        

      </div>
    </section>
  )
}

export default Portafolio