import React from 'react'
import './testimonials.css'
import AVTR1  from '../../assets/avatar1.jpg'
import AVTR2  from '../../assets/avatar2.jpg'
import AVTR3  from '../../assets/avatar3.jpg'
import AVTR4  from '../../assets/avatar4.jpg'

import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar:AVTR1,
    name: 'Fabian Salcedo',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, laudantium voluptatum? Voluptatibus non accusamus voluptatem fugiat aspernatur laborum molestiae ipsa tenetur fugit ab quas quod, at, magni rem itaque reprehenderit!'
  },
  {
    avatar:AVTR2,
    name: 'Alejandra Arenas',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, laudantium voluptatum? Voluptatibus non accusamus voluptatem fugiat aspernatur laborum molestiae ipsa tenetur fugit ab quas quod, at, magni rem itaque reprehenderit!'
  },
  {
    avatar:AVTR3,
    name: 'Oscar Mellizo',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, laudantium voluptatum? Voluptatibus non accusamus voluptatem fugiat aspernatur laborum molestiae ipsa tenetur fugit ab quas quod, at, magni rem itaque reprehenderit!'
  },
  {
    avatar:AVTR4,
    name: 'Martha Angulo',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, laudantium voluptatum? Voluptatibus non accusamus voluptatem fugiat aspernatur laborum molestiae ipsa tenetur fugit ab quas quod, at, magni rem itaque reprehenderit!'
  }
]



const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5></h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
      
        {
          data.map(({avatar,name,review}, index)=>{
            return(
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="avatar" />
              </div>  
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}
              </small>         
             </SwiperSlide>  
            )
          })
        } 
      </Swiper>
    </section>
  )
}

export default Testimonials