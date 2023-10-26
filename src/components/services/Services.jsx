import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>User-Centered Design: Creating intuitive interfaces tailored to the specific needs and preferences of the target audience.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Visual Design: Crafting visually appealing graphics, layouts, and branding elements for digital products.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Design Consultation: Offering expert guidance and recommendations to enhance the overall user experience of websites and applications.</p>
            </li>

          </ul>
        </article>
        {/* END  OF UI/UX */}

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Responsive Website Development: Building websites that adapt seamlessly to various devices and screen sizes.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Front-End Development: Crafting engaging user interfaces with HTML, CSS, and JavaScript.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Back-End Development: Developing robust server-side logic and databases for data management.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>E-Commerce Solutions: Creating online stores with secure payment gateways and product management.</p>
            </li>
          </ul>
        </article>
        {/* END  OF WEB DEVELOPMENT */}

        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Visual Content Production: Creating eye-catching graphics, images, and videos to enhance digital presence.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Using code to automate social media content management and engagement.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Data-Backed Content Strategy: Analyzing data with code to optimize content strategies and personalization.</p>
            </li>
            
          </ul>
        </article>
        {/* END  OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services